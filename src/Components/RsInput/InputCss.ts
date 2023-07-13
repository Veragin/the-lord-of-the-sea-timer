import styled, { css } from 'styled-components';

import { borderRadiusCss, colorDefault, colorHover, colorMain, spacingCss } from '../globalCss';

export const inputCss = css`
    background-color: ${colorDefault};
    border: 2px solid ${colorDefault};
    border-radius: ${borderRadiusCss(1)};
    padding: ${spacingCss(0.5)} ${spacingCss(1)};
    width: 100%;
    outline: none;
    font-weight: 400;
    line-height: 1.75;
    box-sizing: border-box;
    font-size: 16px;

    &:hover {
        background-color: ${colorHover};
        border: 2px solid ${colorHover};
    }

    &:focus {
        border: 2px solid ${colorMain};
        background-color: ${colorHover};
    }

    &:disabled {
        background-color: ${colorHover};
        border: 2px solid ${colorHover};
        color: grey;
    }
`;

export const InputTitle = styled.span`
    color: black;
    font-size: 18px;
`;

export const InputLabel = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: ${spacingCss(0.5)};
`;
