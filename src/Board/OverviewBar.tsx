import { Column, Row } from 'Components/StyledComponents';
import { borderRadiusCss, colorDefault, spacingCss } from 'Components/globalCss';
import { useStore } from 'Context/StoreContext';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const OverviewBar = observer(() => {
    const store = useStore();

    return (
        <StyledInfoBar>
            {store.engine.data.map((info, i) => (
                <StyledPlayerInfo
                    key={info.id}
                    $color={info.color}
                    $isActive={i === store.activePlayer}
                >
                    {info.actions}
                </StyledPlayerInfo>
            ))}
        </StyledInfoBar>
    );
});

const StyledInfoBar = styled(Column)`
    align-items: center;
    justify-content: center;
    gap: ${spacingCss(1)};

    @media only screen and (max-width: 800px) {
        flex-direction: row;
    }
`;

const StyledPlayerInfo = styled(Row)<{ $color: string; $isActive: boolean }>`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: ${borderRadiusCss(2)};
    background-color: ${({ $color }) => $color};
    border: 10px solid ${({ $color, $isActive }) => ($isActive ? colorDefault : $color)};
    color: white;
    font-size: 30px;
`;

const StyledPrevActionValue = styled(Row)`
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 30px;
`;
