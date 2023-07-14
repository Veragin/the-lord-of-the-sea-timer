import { Column } from 'Components/StyledComponents';
import { observer } from 'mobx-react-lite';
import { StateBar } from './StateBar';
import styled from 'styled-components';
import { spacingCss } from 'Components/globalCss';

export const Board = observer(() => {
    return (
        <StyledColumn>
            <StateBar />
        </StyledColumn>
    );
});

const StyledColumn = styled(Column)`
    flex: 1;
    width: calc(100% - ${spacingCss(8)});
    padding: ${spacingCss(4)};
    background-color: #20b2aa;
`;
