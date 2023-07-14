import { Board } from 'Board/Board';
import { useStore } from 'Context/StoreContext';
import { Landing } from 'Landing';
import { observer } from 'mobx-react-lite';

export const App = observer(() => {
    const store = useStore();

    return !store.wasStarted ? <Landing /> : <Board />;
});
