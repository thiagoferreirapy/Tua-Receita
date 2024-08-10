import React, { useEffect } from "react";
import { ButtonContainer, Loader} from "./style";


export default function ButtonGetRecipe({ isLoading }) {
  return (
    <ButtonContainer type="submit" disabled={isLoading}>
      {isLoading ? <Loader/> : 'Buscar'}
    </ButtonContainer>
  );
}
