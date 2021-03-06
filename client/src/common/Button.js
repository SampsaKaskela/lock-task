import styled from 'styled-components';

const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 2em;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color: ${props => props.theme.primary.main};
    color: ${props => props.theme.primary.contrastText};
    fill: ${props => props.theme.primary.contrastText};
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.primary.light};
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    }
`;

export default Button;
