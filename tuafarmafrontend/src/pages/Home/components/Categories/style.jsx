import styled, { css } from "styled-components";

export const Containercategories = styled.div`
  all: unset;
  width: 100%;
  height: 40px;
  /* background-color: red; */
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonCategories = styled.button`
  all: unset;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) =>
    props.$isCurrentCategorie
      ? "#ce2e36b9"
      : "rgba(217, 217, 217, 0.2)"};
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(5.5px);
  transition: all 0.3s ease-in-out;

  &:hover{
    background: #ce2e36b9;
  }
`;
