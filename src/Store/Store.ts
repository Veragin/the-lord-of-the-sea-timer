import { action, makeObservable, observable } from 'mobx';

export class Store {
    constructor() {
        makeObservable(this, {
            wasStarted: observable,
            numberOfPlayers: observable,
            turnDurationS: observable,
            newActionAfterS: observable,
            smallEventProbability: observable,
            largeEventProbability: observable,
            setWasStarted: action,
            setNumberOfPlayers: action,
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

    // CONFIG

    numberOfPlayers = 5;
    setNumberOfPlayers(v: number) {
        this.numberOfPlayers = v;
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
