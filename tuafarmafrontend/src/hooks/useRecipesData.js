import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/v1/recipes/category/";

const fetchData = async (searchTerm) => {
    console.log('categoria req',searchTerm);
    const response = await axios.get(API_URL + `${searchTerm}`);
    return response.data;
}

export function useRecipesData(searchTerm) {
    const query = useQuery({
        queryFn: () => fetchData(searchTerm),
        queryKey: ['recipe-data', searchTerm],
        enabled: !!searchTerm,
    });

    return query;
};
