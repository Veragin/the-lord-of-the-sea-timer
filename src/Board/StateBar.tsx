import { PauseCircleFilledRounded, PlayCircleOutlineRounded } from '@mui/icons-material';
import { Button } from 'Components/Buttons';
import { Row } from 'Components/StyledComponents';
import { useStore } from 'Context/StoreContext';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const StateBar = observer(() => {
    const store = useStore();

    const isPaused = store.state === 'paused';

    return (
        <StyledRow>
            <Button onClick={() => store.setState(isPaused ? 'runnning' : 'paused')}>
                {isPaused ? <PlayCircleOutlineRounded /> : <PauseCircleFilledRounded />}
            </Button>
            <StyledTitle $isPaused={isPaused}>{isPaused ? 'PAUSED' : ''}</StyledTitle>
        </StyledRow>
    );
});

const StyledRow = styled(Row)`
    justify-content: space-between;
`;

const StyledTitle = styled.span<{ $isPaused: boolean }>`
    font-size: 50px;
    color: ${({ $isPaused }) => ($isPaused ? 'orange' : 'white')};
`;
