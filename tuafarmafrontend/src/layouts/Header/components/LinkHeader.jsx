import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components'

const Links = styled(Link)`
    color: ${props => (props.color ? 'red' : 'black')};
  text-decoration: none;
  padding: 10px 15px;
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : 'none')};
  transition: color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;

  &:hover {
    color: #80b978; /* Cor de hover desejada */
    border-bottom: 2px solid #fff; /* Estilo de borda ao passar o mouse */
  }
`;

export function LinkHeader({ to, pageHome, color, borderBottom, label , isScrolled}){
    return (
        <>
            <Links to={to} isScrolled={isScrolled} color={color} borderBottom={borderBottom}>
                {label}
            </Links>
        </>
    )
}
    