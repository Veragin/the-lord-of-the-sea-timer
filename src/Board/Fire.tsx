import { Column, Row } from 'Components/StyledComponents';
import { spacingCss, borderRadiusCss } from 'Components/globalCss';
import { useState } from 'react';
import styled from 'styled-components';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Fire = () => {
    const [shots, setShots] = useState<number[]>([]);

    const fire = (v: number) => {
        const newShots = [];
        for (let i = 0; i < v; i++) {
            newShots.push(shot(), shot());
        }
        setShots(newShots);
    };

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
            {shots.length > 0 && (
                <ShotTable onClick={() => setShots([])}>
                    {shots.map((v, i) => (
                        <span key={i}>{v}</span>
                    ))}
                </ShotTable>
            )}
        </StyledCont>
    );
};

const shot = () => Math.ceil(Math.random() * 4);

const StyledCont = styled(Column)`
    gap: ${spacingCss(1)};
    flex: 1;
    position: relative;
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

////////////////////////////////////////////////////

const ShotTable = styled.div`
    position: absolute;
    z-index: 2;
    display: grid;
    background-color: white;
    color: black;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    gap: ${spacingCss(2)};
    padding: ${spacingCss(2)};
    border-radius: ${borderRadiusCss(2)};
`;
