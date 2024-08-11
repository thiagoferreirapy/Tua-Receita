import styled, { css } from "styled-components";

export const ContainerShowRecipes = styled.section`
  width: 100%;
  height: 100vh;
  padding: 65px 170px;
  display: flex;
  flex-direction: column;
`;

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

export const ContentCardRecipes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-count: 3;
  gap: 100px;
  margin-top: 70px;
`;

export const MensageData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

