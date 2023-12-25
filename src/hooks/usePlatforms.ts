import {useQuery} from "@tanstack/react-query" 
import APIClient , { FetchResponse } from "../services/api-client"
import PlatformSelector from "../components/PlatformSelector"

const apiClient = new APIClient<Platform>("/platforms/lists/parents")
export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    // initialData: {count: PlatformSelector.length , results: PlatformSelector}
})

export default usePlatforms