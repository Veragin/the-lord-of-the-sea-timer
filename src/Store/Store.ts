import { action, makeObservable, observable } from 'mobx';
import { Engine } from './Engine';

type TState = 'paused' | 'runnning';

export class Store {
    engine: Engine;

    constructor() {
        this.engine = new Engine(this);

        makeObservable(this, {
            wasStarted: observable,
            state: observable,
            activePlayer: observable,
            numberOfPlayers: observable,
            baseActions: observable,
            turnDurationS: observable,
            newActionAfterS: observable,
            smallEventProbability: observable,
            largeEventProbability: observable,
            setWasStarted: action,
            setState: action,
            setActivePlayer: action,
            setNumberOfPlayers: action,
            setBaseActions: action,
            setTurnDurationS: action,
            setNewActionAfterS: action,
            setSmallEventProbability: action,
            setLargeEventProbability: action,
        });
    }

    wasStarted = false;
    setWasStarted(v: boolean) {
        this.wasStarted = v;
    }

    state: TState = 'paused';
    setState(state: TState) {
        this.state = state;
    }

    activePlayer = 0;
    setActivePlayer(player: number) {
        this.activePlayer = player;
    }

    // CONFIG

    numberOfPlayers = 5;
    setNumberOfPlayers(v: number) {
        this.numberOfPlayers = v;
    }

    baseActions: number = 2;
    setBaseActions(v: number) {
        this.baseActions = v;
    }

    turnDurationS: number = 60;
    setTurnDurationS(v: number) {
        this.turnDurationS = v;
    }

    newActionAfterS: number = 30;
    setNewActionAfterS(v: number) {
        this.newActionAfterS = v;
    }

    smallEventProbability: number = 0.2;
    setSmallEventProbability(v: number) {
        this.smallEventProbability = v;
    }

    largeEventProbability: number = 0.05;
    setLargeEventProbability(v: number) {
        this.largeEventProbability = v;
    }
}
