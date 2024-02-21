import { action, makeObservable, observable } from 'mobx';
import { Store } from './Store';

type TPlayerInfo = {
    id: number;
    lastTurnMs: number;
    color: string;
};

export class Engine {
    data: TPlayerInfo[] = [];

    startedAtMs: number | null = null;
    playedBeforePauseMs = 0;

    constructor(private store: Store) {
        makeObservable(this, {
            data: observable,
            init: action,
            nextTurn: action,
        });
    }

    init = () => {
        this.data = [];
        for (let i = 0; i < this.store.numberOfPlayers; i++) {
            this.data.push({
                id: i,
                lastTurnMs: Infinity,
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
        this.data[this.store.activePlayer].lastTurnMs = this.getPlayerTimeMs(now);

        if (this.store.state === 'runnning') {
            this.startedAtMs = now;
        }
        this.playedBeforePauseMs = 0;

        const nextPlayer =
            this.store.activePlayer + 1 >= this.data.length ? 0 : this.store.activePlayer + 1;

        this.store.setHasTimeToken(
            !this.data.some(
                (p, i) => i !== nextPlayer && p.lastTurnMs < this.data[nextPlayer].lastTurnMs
            )
        );
        this.store.setActivePlayer(nextPlayer);
    };

    getPlayerTimeMs = (now: number) => {
        const currentPlayedMs = this.startedAtMs === null ? 0 : now - this.startedAtMs;
        return this.playedBeforePauseMs + currentPlayedMs;
    };
}

const playerColors = ['#992808', '#00A619', '#DBA800', '#0CA6F5', '#2D3033', '#B03DCD', '#BCBCBC'];
