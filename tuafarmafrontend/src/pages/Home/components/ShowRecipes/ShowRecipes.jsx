import React, { useEffect } from "react";
import {
  ContainerShowRecipes,
  Title,
  ContentCardRecipes,
  MensageData,
} from "./style";

import CardRecipes from "../../../../components/CardRecipes/Cardrecipes";
import img from "../../../../assets/backgrounds/home.jpg";
import { useRecipesData } from "../../../../hooks/useRecipesData";
import DescriptionCategory from "../DescriptionCategory/DescriptionCategory";
import LoadingEye from "../../../../components/Loadin/LoadingEye";

export default function ShowRecipes({ selectCategory }) {
  const { data, error, isLoading } = useRecipesData(selectCategory);

  console.log('cxategoria buscada: ', selectCategory)
  useEffect(() => {
    console.log("Categoria selecionada:", selectCategory);
  }, [selectCategory]);

  useEffect(() => {
    if (data) {
      console.log("Dados recebidos:", data);
    }
  }, [data]);

  return (
    <ContainerShowRecipes>
      
      <MensageData>
      
      
      <DescriptionCategory
            title="Encontre aqui receitas das mais diversas para você tentar criar e recriar do seu jeitinho"
            description="Aqui, você pode ter acesso a uma vasta seleção de receitas compartilhadas por cozinheiros de todas as regiões do Brasil. Explore uma variedade de pratos incríveis, desde as tradicionais receitas caseiras até as mais sofisticadas criações gastronômicas. Nossa comunidade de cozinheiros apaixonados está sempre pronta para compartilhar suas melhores receitas e dicas culinárias."
          />

      </MensageData>
      <ContentCardRecipes>
      <Title>{error ? "Não foi possivel encontrar receitas :(" : selectCategory}</Title>
      <LoadingEye isLoading={isLoading}/>
      <LoadingEye isLoading={isLoading}/>
      

        {data &&
          data.map((item) => (
            <CardRecipes
              key={item.id}
              image={img}
              description={item.description}
              title={item.name}
            />
          ))}
      </ContentCardRecipes>
    </ContainerShowRecipes>
  );
}
