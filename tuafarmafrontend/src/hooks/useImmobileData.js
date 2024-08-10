import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://127.0.0.1:800/api/v1/";
const fetchData = async () => {
    const response = await axios.get(API_URL + 'immobile/', {
        params: { query: searchTerm }
    });
    return response.data;
};

// const mockFetchData = async (searchTerm) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, name: "Imóvel Simulado 1" },
//                 { id: 2, name: "Imóvel Simulado 2" }
//             ]);
//         }, 2000);
//     });
// }

const mockFetchData = async (searchTerm) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockData = [
                { id: 1, name: "Imóvel Simulado 1", description: "Descrição do Imóvel 1" },
                { id: 2, name: "Imóvel Simulado 2", description: "Descrição do Imóvel 2" },
                { id: 3, name: "Imóvel Simulado 3", description: "Descrição do Imóvel 3" },
            ];

            // Filtra os dados simulados com base no termo de busca
            const filteredData = mockData.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            resolve(filteredData);
        }, 5500);  // Simula um atraso de 1.5 segundos
    });
}

export function useImmobileData(searchTerm, enabled) {
    const query = useQuery({
        queryFn: () => mockFetchData(searchTerm),
        queryKey: ['immobile-data', searchTerm],
        enabled: enabled,
    });

    return query;
};
