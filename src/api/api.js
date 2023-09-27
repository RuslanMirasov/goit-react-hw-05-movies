import axios from 'axios';

const API_KEY = '1a396fe1389b5fc2cd01e9ce70b8c4bb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};

export const handleSearch = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data.results;
};

export const getMovieActors = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  return response.data.results;
};
