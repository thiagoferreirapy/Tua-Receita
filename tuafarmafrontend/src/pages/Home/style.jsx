import styled from "styled-components";
import bg from "../../assets/backgrounds/home3.jpg";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ConatinerCategories = styled.section`
  width: 100%;
  height: 516px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  mask-image: linear-gradient(to top, #ffffff 65%, rgba(255, 255, 255, 0) 86%);
  border-radius: 0px 0px 50px 50px;
  gap: 20px;
  position: relative;
`;

export const Title = styled.h1`
  font-family: "Poller One";
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;
