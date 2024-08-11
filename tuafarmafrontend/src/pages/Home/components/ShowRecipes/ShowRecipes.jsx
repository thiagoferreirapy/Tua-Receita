import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import {
  ContainerShowRecipes,
  Title,
  DescroptionCategory,
  ContentCardRecipes,
  MensageData
} from "./style";
import { useImmobileData } from "../../../../hooks/useImmobileData";
import CardRecipes from "../../../../components/CardRecipes/Cardrecipes";
import img from '../../../../assets/backgrounds/home.jpg'
import { useRecipesData } from "../../../../hooks/useRecipesData";

export default function ShowRecipes({ selectCategory }) {
  const { data, error, isLoading } = useRecipesData(selectCategory);

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
      <Title>
        Encontre aqui receitas das mais diversas para você tentar criar e
        recriar do seu jeitinho
      </Title>
      <DescroptionCategory>
        Aqui, você pode ter acesso a uma vasta seleção de receitas
        compartilhadas por cozinheiros de todas as regiões do Brasil. Explore
        uma variedade de pratos incríveis, desde as tradicionais receitas
        caseiras até as mais sofisticadas criações gastronômicas. Nossa
        comunidade de cozinheiros apaixonados está sempre pronta para
        compartilhar suas melhores receitas e dicas culinárias.
      </DescroptionCategory>

      {error && <Title>Não foi possível encontrar receitas :(</Title>}
      </MensageData>
      <ContentCardRecipes>
      
        {data &&
          data.map((item) => (
            <CardRecipes
              key={item.id}
              image={img} // Aqui você pode substituir `img` pela propriedade correta vinda de `item`
              description={item.description}
              title={item.name}
            />
          ))}
      </ContentCardRecipes>
    </ContainerShowRecipes>
  );
}
