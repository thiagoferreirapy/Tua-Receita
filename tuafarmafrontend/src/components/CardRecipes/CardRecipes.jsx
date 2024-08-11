import React, { useEffect } from "react";
import { Card, ImageCard, Title, Description, Text} from "./style";


export default function CardRecipes({ image, title, description}) {
  return (
    <Card>
        <ImageCard src={image}/>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Text><strong>VEJA MAIS</strong><span>+</span></Text>
    </Card>
  );
}
