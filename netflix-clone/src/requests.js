const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTopRated: `tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  fetchTrending: `trending/all/day?language=en-US&api_key=${API_KEY}`,
  fetchPopular: `movie/popular?language=en-US&page=1&api_key=${API_KEY}`
};

export default requests;
