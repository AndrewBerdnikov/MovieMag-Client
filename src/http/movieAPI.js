import { $authHost, $host } from ".";

export const createMovie = async (name, logo, generated, director, description) => {
    const {data} = await $authHost.post('api/movie/', {name, logo, generated, director, description});
    return data;
}

export const getAllMovie = async () => {
    const {data} = await $host.get('api/movie');
    return data;
}

export const getRandomMovie = async () => {
    const {data} = await $host.get('api/movie/random');
    return data;
}

export const getMovieByName = async (name) => {
    const {data} = await $host.get('api/movie/' + name);
    return data;
}

export const deleteMovie = async (name) => {
    const {data} = await $authHost.delete('api/movie/' + name);
    return data;
}






