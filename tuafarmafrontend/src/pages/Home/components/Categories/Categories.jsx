import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { Containercategories, ButtonCategories } from "./style";

export default function Categories({ currentCategory, onCategorySelect }) {
  const handleClick = (category) => {
    onCategorySelect(category);
  };
  
  return (
    <Containercategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "ALL"}
        onClick={() => handleClick("ALL")}
      >
        Todos
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "MEATS"}
        onClick={() => handleClick("MEATS")}
      >
        Carnes
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "POULTRY"}
        onClick={() => handleClick("POULTRY")}
      >
        Aves
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "SWEETS_AND_DESSERTS"}
        onClick={() => handleClick("SWEETS_AND_DESSERTS")}
      >
        Doces e Sobremesas
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "SAVORY_AND_SAUCES"}
        onClick={() => handleClick("SAVORY_AND_SAUCES")}
      >
        Salgados e Molhos
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "CAKES_AND_PIES"}
        onClick={() => handleClick("CAKES_AND_PIES")}
      >
        Bolos e Tortas
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "FISH_AND_SEAFOOD"}
        onClick={() => handleClick("FISH_AND_SEAFOOD")}
      >
        Peixes e Frutos do mar
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "SOUPS"}
        onClick={() => handleClick("SOUPS")}
      >
        Sopas
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "PASTAS"}
        onClick={() => handleClick("PASTAS")}
      >
        Massas
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "SNACKS"}
        onClick={() => handleClick("SNACKS")}
      >
        Lanches
      </ButtonCategories>
      <ButtonCategories
        $isCurrentCategorie={currentCategory === "HEALTHY"}
        onClick={() => handleClick("HEALTHY")}
      >
        +Saúde
      </ButtonCategories>
    </Containercategories>
  );
}
