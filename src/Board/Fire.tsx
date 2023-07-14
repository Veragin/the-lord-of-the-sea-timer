import { Column, Row } from 'Components/StyledComponents';
import { spacingCss, borderRadiusCss } from 'Components/globalCss';
import styled from 'styled-components';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Fire = () => {
    const fire = (v: number) => {};

    return (
        <StyledCont>
            <StyledTitle>Fire</StyledTitle>
            <StyledGrid>
                {values.map((v) => (
                    <StyledFireValue key={v} onClick={() => fire(v)}>
                        {v}
                    </StyledFireValue>
                ))}
            </StyledGrid>
        </StyledCont>
    );
};

const StyledCont = styled(Column)`
    gap: ${spacingCss(1)};
    flex: 1;
`;

const StyledGrid = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    gap: ${spacingCss(1)};
`;

const StyledFireValue = styled(Row)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    cursor: pointer;
    background-color: #c3c4c0;
    border-radius: ${borderRadiusCss(2)};

    &:hover {
        background-color: black;
    }
`;

const StyledTitle = styled.span`
    color: black;
    font-size: 30px;
    align-self: stretch;
    text-align: center;
`;
