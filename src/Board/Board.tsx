import { Column, Row } from 'Components/StyledComponents';
import { observer } from 'mobx-react-lite';
import { StateBar } from './StateBar';
import styled from 'styled-components';
import { borderRadiusCss, spacingCss } from 'Components/globalCss';
import { useStore } from 'Context/StoreContext';
import { Counter } from './Counter';
import { OverviewBar } from './OverviewBar';

export const Board = observer(() => {
    const store = useStore();

    return (
        <StyledColumn>
            <StateBar />
            <StyledPlayerColor $color={store.engine.data[store.activePlayer]?.color ?? 'white'}>
                Player on turn
            </StyledPlayerColor>
            <StyledContent>
                <Counter />
                <OverviewBar />
            </StyledContent>
        </StyledColumn>
    );
});

const StyledColumn = styled(Column)`
    flex: 1;
    width: calc(100% - ${spacingCss(8)});
    gap: ${spacingCss(4)};
    padding: ${spacingCss(4)};
    background-color: #20b2aa;
    align-items: stretch;
`;

const StyledPlayerColor = styled.div<{ $color: string }>`
    background-color: ${({ $color }) => $color};
    padding: ${spacingCss(2)};
    font-size: 30px;
    text-align: center;
    border-radius: ${borderRadiusCss(2)};
    color: white;
`;
const StyledContent = styled(Row)`
    gap: ${spacingCss(2)};
    align-items: stretch;
`;
