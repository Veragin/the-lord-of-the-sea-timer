import styled from 'styled-components';
import { spacingCss, borderRadiusCss } from 'Components/globalCss';
import { Column } from 'Components/StyledComponents';
import { useStore } from 'Context/StoreContext';
import { observer } from 'mobx-react-lite';

export const EventDisplay = observer(() => {
    const store = useStore();
    const event = store.smallEvent ?? store.largeEvent;

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
`;
