import { Column } from 'Components/StyledComponents';
import { observer } from 'mobx-react-lite';
import { StateBar } from './StateBar';

export const Board = observer(() => {
    return (
        <Column>
            <StateBar />
        </Column>
    );
});
