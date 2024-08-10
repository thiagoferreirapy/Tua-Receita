import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const HeaderContent = styled.section`
  max-width: 1510px;
  width: 100%;
  height: 70px;
  padding: 0 110px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.img`
  width: 120px;
`;

export const LinkHeader = styled(Link)`
  font-size: 16px;
  font-weight: ${(props) =>
    props.$isCurrentPage ? 700 : 600};
  padding: 0px 5px;
  text-decoration: none;
  margin: 0 20px;
  position: relative;
  transition: color 0.3s ease-in-out;
  color: ${(props) =>
    props.$isCurrentPage ? props.theme.colors.redPrimary : props.theme.colors.secundary};
  &:hover{
    color: ${(props) => props.theme.colors.redPrimary};
  }
  
  
  /* ${(props) =>
    !props.$isCurrentPage &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #CE2E37;
        transition: width 0.3s ease-in-out;
      }
      &:hover::after {
        width: 100%;
      }
    `} */
    
`;

export const ButtonAccountUser = styled.a`
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 10px;
  transition: all .3s ease-in-out;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.redPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;