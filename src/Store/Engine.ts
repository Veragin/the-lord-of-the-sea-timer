import { Store } from './Store';

type TPlayerInfo = {
    id: number;
    timeMs: number;
    actions: number;
    color: string;
};

export class Engine {
    data: TPlayerInfo[] = [];

    startedAtMs: number | null = null;
    playedBeforePauseMs = 0;

    constructor(private store: Store) {}

    init = () => {
        this.data = [];
        for (let i = 0; i < this.store.numberOfPlayers; i++) {
            this.data.push({
                id: i,
                timeMs: 0,
                actions: this.store.baseActions,
                color: playerColors[i] ?? 'white',
            });
        }
    };

    play = () => {
        this.startedAtMs = Date.now();
    };

    pause = () => {
        if (this.startedAtMs === null) throw new Error('Engine was not started');
        this.playedBeforePauseMs += Date.now() - this.startedAtMs;
        this.startedAtMs = null;
    };

    nextTurn = () => {
        const now = Date.now();
        this.adjustTimeAndActionsOfOthers(now);

        this.startedAtMs = now;
        this.playedBeforePauseMs = 0;

        const nextPlayer =
            this.store.activePlayer + 1 >= this.data.length ? 0 : this.store.activePlayer + 1;
        this.store.setActivePlayer(nextPlayer);
    };

    private adjustTimeAndActionsOfOthers = (now: number) => {
        const currentPlayedMs = this.startedAtMs === null ? 0 : now - this.startedAtMs;
        const timeSpendMs = this.playedBeforePauseMs + currentPlayedMs;
        const timeOverLimitMs = Math.max(0, timeSpendMs - this.store.turnDurationS * 1000);

        this.data.forEach((d) => {
            if (d.id === this.store.activePlayer) {
                d.timeMs = 0;
                d.actions = this.store.baseActions;
                return;
            }

            d.timeMs += timeOverLimitMs;
            const bonuseActions = Math.floor(d.timeMs / (this.store.newActionAfterS * 1000));
            d.actions = this.store.baseActions + bonuseActions;
        });
    };
}

const playerColors = ['red', 'green', 'yellow', 'blue', 'black'];
