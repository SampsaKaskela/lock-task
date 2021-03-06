import styled from 'styled-components';

const Paper = styled.div`
    border-radius: 5px;
    padding: 1em;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
    background: ${props => props.theme.paper};
`;

export default Paper;
