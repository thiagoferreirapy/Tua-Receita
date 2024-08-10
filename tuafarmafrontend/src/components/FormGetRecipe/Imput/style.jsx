import styled, { css } from "styled-components";

export const InputContainer = styled.input`
  all: unset;
  width: 500px;
  height: 40px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
  padding: 0px 15px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.20);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(5.5px);
  transition: all 0.3s ease-in-out;

  &::placeholder{
    color: #cbcbcb;
  }

  &:focus{
    background: rgba(217, 217, 217, 0.296);
  }
  &:hover{
    background: rgba(217, 217, 217, 0.296);
  }
`;