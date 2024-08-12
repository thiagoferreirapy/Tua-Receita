import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.redPrimary};
  flex-wrap: wrap;
`;

export const FooterContent = styled.section`
  max-width: 1510px;
  width: 100%;
  height: 100%;
  padding: 0 110px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 50px;
  flex-wrap: wrap;
`;

export const FooterDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const ImageLogo = styled.img`
  width: 150px;
  object-fit: cover;
`;
export const ImageSupport = styled.img`
  width: 150px;
  object-fit: cover;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const FooterContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
`;
export const Contact = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  
`;
export const ContentSupport = styled.div`
  width: 300px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;