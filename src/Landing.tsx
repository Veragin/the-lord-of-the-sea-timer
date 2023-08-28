import styled from 'styled-components';
import { Column } from './Components/StyledComponents';
import { spacingCss, borderRadiusCss } from './Components/globalCss';
import RsNumber from './Components/RsInput/RsNumber';
import { useStore } from 'Context/StoreContext';
import { Button } from 'Components/Buttons';
import { observer } from 'mobx-react-lite';

export const Landing = observer(() => {
    const store = useStore();

    return (
        <StyledCont>
            <StyledTitle>The Lord of the Sea Timer</StyledTitle>
            <StyledWindow>
                <RsNumber
                    value={store.numberOfPlayers}
                    onChange={(v) => store.setNumberOfPlayers(v)}
                    title="Number of players"
                    min={2}
                    max={5}
                    step={1}
                />
                <RsNumber
                    value={store.baseActions}
                    onChange={(v) => store.setBaseActions(v)}
                    title="Base actions cards"
                    min={0}
                    step={1}
                />
                <RsNumber
                    value={store.turnDurationS}
                    onChange={(v) => store.setTurnDurationS(v)}
                    title="Turn duration in s"
                    min={0}
                    step={1}
                />
                <RsNumber
                    value={store.newActionAfterS}
                    onChange={(v) => store.setNewActionAfterS(v)}
                    title="New Action card after in s"
                    min={0}
                    step={1}
                />
                <RsNumber
                    value={store.smallEventProbability}
                    onChange={(v) => store.setSmallEventProbability(v)}
                    title="Small event probability"
                    min={0}
                    max={1}
                />
                <Button onClick={() => store.setWasStarted(true)}>Start</Button>
            </StyledWindow>
        </StyledCont>
    );
});

const StyledCont = styled(Column)`
    row-gap: ${spacingCss(8)};
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledTitle = styled.span`
    color: white;
    font-size: 50px;
`;

const StyledWindow = styled(Column)`
    background-color: rgba(50, 50, 50, 0.3);
    padding: ${spacingCss(3)};
    min-width: min(500px, 80%);
    max-width: 80%;
    max-height: 600px;
    row-gap: ${spacingCss(2)};
    border-radius: ${borderRadiusCss(2)};
    align-items: center;
`;
