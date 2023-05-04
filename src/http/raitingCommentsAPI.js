import { $authHost, $host } from ".";

export const createRaiting = async (userId, movieId, raiting) => {
    const {data} = await $authHost.post('api/raiting-comments/addRaiting', {userId, movieId, raiting});
    return data;
}

export const createComment = async (userId, movieId, comment) => {
    const {data} = await $authHost.post('api/raiting-comments/addComment', {userId, movieId, comment});
    return data;
}

export const getRaiting = async (movieId) => {
    const {data} = await $host.get('api/raiting-comments/getRaiting', {movieId});
    return data;
}

export const getComments = async (movieId) => {
    const {data} = await $host.get('api/raiting-comments/getComment', {movieId});
    return data;
}