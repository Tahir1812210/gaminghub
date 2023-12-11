import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f386e804155c403096443220c490ff06'
    }
})