import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { InputContainer} from "./style";

export default function InputGetRecipe({placeholder, type, value, onChange}) {
  return (
    <>
        <InputContainer
        type={type} 
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        />
    </>
  );
}
