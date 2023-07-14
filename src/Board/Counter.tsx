import { Column } from 'Components/StyledComponents';
import { borderRadiusCss, spacingCss } from 'Components/globalCss';
import { useStore } from 'Context/StoreContext';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

export const Counter = () => {
    const store = useStore();
    const timeer = useRef<NodeJS.Timer | null>(null);
    const valRef = useRef<HTMLSpanElement>(null);
    const constRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        timeer.current = setInterval(() => {
            if (valRef.current && constRef.current) {
                const time = store.engine.getPlayerTimeS();
                const isAfterLimit = Math.sign(time) < 0;
                let timeString = String(Math.abs(time));
                timeString = timeString.includes('.') ? timeString : `${timeString}.0`;
                valRef.current.innerHTML = `${timeString} s`;
                constRef.current.style.backgroundColor = isAfterLimit ? '#FF7377' : '#AFFF80';
            }
        }, 50);

        return () => {
            timeer.current && clearInterval(timeer.current);
        };
    }, [timeer, valRef, store.engine]);

    return (
        <StyledCont ref={constRef} onClick={() => store.engine.nextTurn()}>
            <StyledTime>Next turn</StyledTime>
            <StyledTime ref={valRef} />
            <StyledTime>{store.getActivePlayerData().actions} actions</StyledTime>
        </StyledCont>
    );
};

const StyledCont = styled(Column)`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: ${spacingCss(6)};
    border-radius: ${borderRadiusCss(2)};
    cursor: pointer;
`;

const StyledTime = styled.span`
    font-size: 50px;
`;
