import { InputLabel, InputTitle, inputCss } from './InputCss';

import styled from 'styled-components';

type Props<T> = {
    title: string;
    value: T;
    onChange?: (v: T) => void;
    disabled?: boolean;
    readOnly?: boolean;
    type?: 'text' | 'password' | 'number';
    min?: number;
    max?: number;
    step?: number;
};

const RsInput = <T extends string>({
    title,
    value,
    onChange,
    disabled,
    readOnly,
    type,
    min,
    max,
    step,
}: Props<T>) => {
    return (
        <InputLabel>
            <InputTitle>{title}</InputTitle>
            <StyledInput
                value={value}
                onChange={(e) => onChange?.(e.target.value as T)}
                disabled={disabled}
                readOnly={readOnly}
                type={type}
                min={min}
                max={max}
                step={step}
            />
        </InputLabel>
    );
};

const StyledInput = styled.input`
    ${inputCss}
`;

export default RsInput;
