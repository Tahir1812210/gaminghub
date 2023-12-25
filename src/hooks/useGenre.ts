import genres from "../data/genres"
import {useQuery} from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { FetchResponse } from "../services/api-client"

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
    id: number
    name: string
    image_background: string
}



const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    initialData: {count: genres.length , results: genres}
});

export default useGenre