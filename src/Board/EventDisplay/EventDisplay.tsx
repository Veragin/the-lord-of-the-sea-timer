import styled from 'styled-components';
import { spacingCss, borderRadiusCss } from 'Components/globalCss';
import { Column } from 'Components/StyledComponents';
import { useStore } from 'Context/StoreContext';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { assertNotNullish } from 'Context/context';
import { renderTiles } from './draw';

export const EventDisplay = observer(() => {
    const store = useStore();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const event = store.smallEvent ?? store.largeEvent;

    useEffect(() => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            canvasRef.current.width = rect.width;
            canvasRef.current.height = rect.height;

            const ctx = canvasRef.current.getContext('2d');
            assertNotNullish(ctx);
            ctx.translate(-15, 30);
            ctx.scale(0.8, 0.8);

            renderTiles(ctx, event?.hexIndex ?? 0);
        }
    });

    if (event === null) return null;

    const isLarge = event.type === 'large';

    const onClose = () => {
        if (isLarge) {
            store.setLargeEvent(null);
            return;
        }

        store.setSmallEvent(null);
    };

    return (
        <StyledCont onClick={onClose}>
            <StyledTitle>{isLarge ? 'New LARGE event' : 'New SMALL event'}</StyledTitle>
            <span>{`Event hex id: ${event.hexNumber}`}</span>
            <span>{`Event hex index: ${event.hexIndex}`}</span>
            <StyledCanvas ref={canvasRef} />
        </StyledCont>
    );
});

const StyledCont = styled(Column)`
    position: absolute;
    z-index: 2;
    background-color: white;
    color: black;
    justify-items: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    gap: ${spacingCss(2)};
    padding: ${spacingCss(2)};
    border-radius: ${borderRadiusCss(2)};
    font-size: 30px;
    cursor: pointer;
`;

const StyledTitle = styled.span`
    font-size: 50px;
    text-align: center;
`;

const StyledCanvas = styled.canvas`
    flex: 1;

    max-width: 100%;
`;
