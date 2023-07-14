import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
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
                {isPaused ? (
                    <FontAwesomeIcon icon={faPlay} size={'2x'} />
                ) : (
                    <FontAwesomeIcon icon={faPause} size={'2x'} />
                )}
            </Button>
            <StyledTitle $isPaused={isPaused}>{isPaused ? 'PAUSED' : ''}</StyledTitle>
            <Button
                onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    if (confirm('Are you sure you want to exit?')) {
                        store.setWasStarted(false);
                    }
                }}
            >
                <FontAwesomeIcon icon={faClose} size={'2x'} />
            </Button>
        </StyledRow>
    );
});

const StyledRow = styled(Row)`
    justify-content: space-between;
`;

const StyledTitle = styled.span<{ $isPaused: boolean }>`
    font-size: 55px;
    font-weight: 600;
    color: ${({ $isPaused }) => ($isPaused ? 'gold' : 'white')};
`;
