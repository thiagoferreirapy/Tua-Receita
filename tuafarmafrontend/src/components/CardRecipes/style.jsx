import styled, { keyframes, css } from "styled-components";


export const Card = styled.div`
  width: 450px;
  height: 470px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.whiteSecondary};
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover{
    box-shadow: 3px 3px 6px -4px #3d3d3db5;
  }
`;


export const ImageCard = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  background-color: #484848;
`;

export const Title = styled.div`
width: 100%;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.secundary};
  display: -webkit-box;           
  -webkit-box-orient: vertical;   
  -webkit-line-clamp: 1;          
  overflow: hidden;               
  text-overflow: ellipsis;
`;

export const  Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  line-height: 22px;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.secundary};
  display: -webkit-box;           
  -webkit-box-orient: vertical;   
  -webkit-line-clamp: 5;          
  overflow: hidden;               
  text-overflow: ellipsis; 
`;

export const  Text = styled.div`
font-size: 16px;
font-weight: 600;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
strong{
    color: ${(props) => props.theme.colors.secundary};
}
span{
    color: ${(props) => props.theme.colors.redPrimary};
    font-size: 25px;
}
`;

