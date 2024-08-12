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
        <br />
        <br />
        <div>
        <Title>Encontre e compartilhe as receitas da sua vida</Title>
        <FormGetRecipe/>
        </div>
        <Categories currentCategory={currentCategory} onCategorySelect={handleCategorySelect}/>
      </ConatinerCategories>
      <ShowRecipes selectCategory={currentCategory}/>
    </Main>
  );
}
