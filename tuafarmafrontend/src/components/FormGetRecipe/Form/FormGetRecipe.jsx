import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ContainerForm } from "./style";
import InputGetRecipe from "../Imput/InputGetRecipe";
import ButtonGetRecipe from "../Button/ButtonGetRecipe";
import { useImmobileData } from "../../../hooks/useImmobileData";

export default function FormGetRecipe() {
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa
    const [shouldFetch, setShouldFetch] = useState(false); // Controla se a query deve ser executada
    const { data, error, isLoading } = useImmobileData(searchTerm, shouldFetch);

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputVerification = inputValue.trim();
        if (inputVerification) {
            console.log("Input value:", inputValue);
            setSearchTerm(inputValue); // Atualiza o termo de pesquisa
            setShouldFetch(true); // Ativa a execução da query
        } else {
            console.log("Input está vazio");
        }
    };
    
    useEffect(() => {
        if (data) {
            console.log("Dados recebidos:", data);
            setShouldFetch(false); // Desativa a execução da query após receber os dados
        }
    }, [data]);

    return (
        <ContainerForm onSubmit={handleSubmit}>
            <InputGetRecipe 
            type={"text"} 
            placeholder={"Procure por uma receita"}
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} />

            <ButtonGetRecipe isLoading={isLoading}/>
            {/* {isLoading && <p>Carregando...</p>} */}
            {error && <p>Erro ao buscar dados: {error.message}</p>}
        </ContainerForm>
    );
};