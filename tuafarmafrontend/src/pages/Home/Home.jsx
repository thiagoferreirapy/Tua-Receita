import React, { useState } from 'react';
import FormGetRecipe from "../../components/FormGetRecipe/Form/FormGetRecipe";
import Categories from "./components/Categories/Categories";
import {
  Main,
  ConatinerCategories,
  Title,
} from "./style";
import ShowRecipes from './components/ShowRecipes/ShowRecipes';

export default function Home() {
    const [currentCategory, setCurrentCategory] = useState('ALL');

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    console.log("Categoria selecionada:", category);
  };
  return (
    <Main>
      <ConatinerCategories>
        <Title>Encontre e compartilhe as receitas da sua vida</Title>
        <FormGetRecipe/>
        <Categories currentCategory={currentCategory} onCategorySelect={handleCategorySelect}/>
      </ConatinerCategories>
      <ShowRecipes selectCategory={currentCategory}/>
    </Main>
  );
}
