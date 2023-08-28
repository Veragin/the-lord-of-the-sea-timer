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

        this.store.updatePrevPlayerActionCount();
        this.adjustTimeAndActionsOfOthers(now);

        if (this.store.state === 'runnning') {
            this.startedAtMs = now;
        }
        this.playedBeforePauseMs = 0;

        const nextPlayer =
            this.store.activePlayer + 1 >= this.data.length ? 0 : this.store.activePlayer + 1;
        this.store.setActivePlayer(nextPlayer);
        this.generateEvent();
    };

    getPlayerTimeS = () => {
        const spendTimeMs = this.getPlayerSpendTimeMs(Date.now());
        return Math.round(this.store.turnDurationS * 10 - spendTimeMs / 100) / 10;
    };

    private getPlayerSpendTimeMs = (now: number) => {
        const currentPlayedMs = this.startedAtMs === null ? 0 : now - this.startedAtMs;
        return this.playedBeforePauseMs + currentPlayedMs;
    };

    private adjustTimeAndActionsOfOthers = (now: number) => {
        const timeSpendMs = this.getPlayerSpendTimeMs(now);
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

    private possibleHexs = getFreshHexs();
    private generateEvent = () => {
        if (this.store.state === 'paused') return;

        const isNewSmallEvent = Math.random() < this.store.smallEventProbability;
        if (isNewSmallEvent) {
            if (this.possibleHexs.length === 0) {
                this.possibleHexs = getFreshHexs();
            }

            const hexIndex = Math.floor(Math.random() * this.possibleHexs.length);
            this.store.setSmallEvent({
                hexNumber: this.possibleHexs[hexIndex],
                hexIndex: Math.ceil(Math.random() * 37),
                type: 'small',
            });

            this.possibleHexs.splice(hexIndex, 1);
        }

        if (isNewSmallEvent) {
            this.store.setState('paused');
        }
    };
}

const getFreshHexs = () => [1, 2, 3, 4, 5, 6, 7];

const playerColors = ['#992808', '#00A619', '#DBA800', '#0CA6F5', '#2D3033'];
