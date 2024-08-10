import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { ContainerShowRecipes} from "./style";

export default function ShowRecipes({ selectCategory}) {

  return (
    <ContainerShowRecipes>
        <h1>{selectCategory}</h1>
    </ContainerShowRecipes>
  );
}