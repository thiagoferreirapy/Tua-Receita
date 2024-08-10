import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/v1/";

const fetchData = async (searchTerm) => {
    const response = await axios.get(API_URL + `recipes/${searchTerm}`);
    return response;
}

export function useRecipesData(searchTerm) {
    const query = useQuery({
        queryFn: fetchData(searchTerm),
        queryKey: ['recipe-data'],
        enabled: !!searchTerm,
    });

    return query;
};
