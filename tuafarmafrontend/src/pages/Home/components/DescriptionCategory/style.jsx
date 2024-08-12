import styled from "styled-components";

export const Title = styled.h1`
  width: 80%;
  font-size: 30px;
  font-weight: 800;
  text-align: left;
  line-height: 38px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.secundary};
`;

export const DescroptionCategory = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  text-align: justify;
  line-height: 22px;
  color: ${(props) => props.theme.colors.secundary};
`;

