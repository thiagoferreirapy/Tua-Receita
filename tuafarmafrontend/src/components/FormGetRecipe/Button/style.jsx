import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
  all: unset;
  width: 130px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.redPrimary};
  display: flex;
  align-items: center;
  justify-content: center;

`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-top: 3px solid ${(props) => props.theme.colors.redPrimary};
  background-color: transparent;
  animation: ${spin} 1s linear infinite;
  position: relative;
  display: inline-block;
`;