import { action, makeObservable, observable } from 'mobx';
import { Engine } from './Engine';

type TState = 'paused' | 'runnning';

export type TEvent = null | {
    type: 'small' | 'large';
    hexNumber: number; //0-7
    hexIndex: number; //0-37
};

export class Store {
    engine: Engine;

    constructor() {
        this.engine = new Engine(this);

        makeObservable(this, {
            wasStarted: observable,
            state: observable,
            activePlayer: observable,
            smallEvent: observable,
            numberOfPlayers: observable,

            setWasStarted: action,
            setState: action,
            setActivePlayer: action,
            setSmallEvent: action,
            setNumberOfPlayers: action,
        });
    }

    wasStarted = false;
    setWasStarted(v: boolean) {
        this.wasStarted = v;
        this.engine.init();
    }

    state: TState = 'paused';
    setState(state: TState) {
        this.state = state;
        if (state === 'runnning') {
            this.engine.play();
        } else {
            this.engine.pause();
        }
    }

    activePlayer = 0;
    setActivePlayer(player: number) {
        this.activePlayer = player;
    }
    hasTimeToken = false;
    setHasTimeToken(v: boolean) {
        this.hasTimeToken = v;
    }
    getActivePlayerData = () => {
        return this.engine.data[this.activePlayer];
    };

    // EVENTS

    smallEvent: TEvent = null;
    setSmallEvent(e: TEvent) {
        this.smallEvent = e;
    }

    numberOfPlayers = 5;
    setNumberOfPlayers(v: number) {
        this.numberOfPlayers = v;
    }
}
