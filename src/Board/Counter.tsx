import { Column } from 'Components/StyledComponents';
import { spacingCss } from 'Components/globalCss';
import { useStore } from 'Context/StoreContext';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

export const Counter = () => {
    const store = useStore();
    const timeer = useRef<NodeJS.Timer | null>(null);
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        timeer.current = setInterval(() => {
            if (el.current) {
                const time = store.engine.getPlayerTimeS();
                const isAfterLimit = Math.sign(time) < 0;
                let timeString = String(Math.abs(time));
                timeString = timeString.includes('.') ? timeString : `${timeString}.0`;
                el.current.innerHTML = `${timeString} s`;
                el.current.style.color = isAfterLimit ? 'red' : 'green';
            }
        }, 50);

        return () => {
            timeer.current && clearInterval(timeer.current);
        };
    }, [timeer, el, store.engine]);

    return (
        <StyledCont onClick={() => store.engine.nextTurn()}>
            <span>Next turn</span>
            <StyledTime ref={el} />
        </StyledCont>
    );
};

const StyledCont = styled(Column)`
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    gap: ${spacingCss(2)};
    border: 2px solid black;
`;

const StyledTime = styled.span`
    font-size: 50px;
`;
