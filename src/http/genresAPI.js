import { $authHost, $host } from ".";

export const createGenres = async (movieId, genres) => {
    const {data} = await $authHost.post('api/movie/', {movieId, genres});
    return data;
}

export const getGenre = async (movieId) => {
    console.log(movieId)
    const {data} = await $host.get('api/genres/getGenre', movieId);
    return data;
}

export const getMovie = async (genre) => {
    const {data} = await $host.get('api/genres/getMovie', {genre});
    return data;
}