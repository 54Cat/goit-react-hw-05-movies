import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '620c22c72a0506de67d3408e088d0eb6';
const LANGUAGE = 'en-US';

async function FetchApiTrending() {
    const REQUEST_URL = `${BASE_URL}trending/movie/day?api_key=${KEY}`;
    const response = await axios.get(REQUEST_URL);
    console.log("FetchApiTrending", response.data);
    return response.data;
}

async function FetchApiSearchMovies(query, page) {
    const REQUEST_URL = `${BASE_URL}search/movie?api_key=${KEY}&language=${LANGUAGE}&query=${query}&page=${page}&include_adult=false`;
    const response = await axios.get(REQUEST_URL);
    console.log("FetchApiSearchMovies", response.data);
    return response.data;
}

async function FetchApiMovieId(movieId) {
    const REQUEST_URL = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=${LANGUAGE}`;
    const response = await axios.get(REQUEST_URL);
    console.log("FetchApiMovieId", response.data);
    return response.data;
}

async function FetchApiMovieIdCredits(movieId) {
    const REQUEST_URL = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=${LANGUAGE}`;
    const response = await axios.get(REQUEST_URL);
    console.log("FetchApiMovieIdCredits", response.data);
    return response.data;
}

async function FetchApiMovieIdReviews(movieId, page) {
    const REQUEST_URL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=${LANGUAGE}&page=${page}`;
    const response = await axios.get(REQUEST_URL);
    console.log("FetchApiMovieIdReviews", response.data);
    return response.data;
}

export { FetchApiTrending, FetchApiSearchMovies, FetchApiMovieId, FetchApiMovieIdCredits, FetchApiMovieIdReviews };
