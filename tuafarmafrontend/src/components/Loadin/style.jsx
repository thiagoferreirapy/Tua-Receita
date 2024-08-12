import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const LoaderWrapper = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  background-color: #f71d1d;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    background-size: 200% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;



export const Loader = styled.section`
  width: 450px;
  height: 450px;
  background-color: #f2f2f25a;
    display: flex;
    align-items: center;
    justify-content: center;
`;
