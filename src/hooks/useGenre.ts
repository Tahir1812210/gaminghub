import useData from "./useData";


export interface Genre {
    id: number
    name: string
    image_background: string
}



const useGenre = (selectedGenre: Genre | null) => useData<Genre>('/genres')

export default useGenre