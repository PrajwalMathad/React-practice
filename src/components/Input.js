import { forwardRef, memo } from 'react';
import { styled } from 'styled-components';

const Input = styled.input`
    border: 1px solid ${(props) => props._invalid ? "red" : "blue"};
    border-radius: 4px;
    background: ${(props) => props._invalid ? "#ffd5d5" : "#f2eeee"};
    height: 2.5em;
    padding: 0 0.5em;
    margin: 0 1rem;
`;

const Label = styled.label`
    color: ${(props) => props._invalid ? "red" : "blue"};
    font-size: 1.5em;
    font-weight: 200;
    margin: 0 1rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%
`;

const CustomInputRef = memo(forwardRef(function CustomInput({ label, _invalid, ...props }, ref) {
    console.log(label+ " Input rendered");
    return (
        <Container>
            { label && <Label _invalid={_invalid}>{label}</Label>}
            <Input ref={ref} _invalid={_invalid} {...props} />
        </Container>
    )
}))

export default CustomInputRef;
