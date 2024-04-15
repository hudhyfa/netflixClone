const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchPopular: `movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
  fetchTopRatedTvSeries: `tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  fetchTopRatedMovies: `movie/top_rated?language=en-US&page=1&page=1&api_key=${API_KEY}`,
  fetchTrending: `trending/all/day?language=en-US&api_key=${API_KEY}`,
  fetchTrendingMovies: `trending/movie/day?language=en-US&api_key=${API_KEY}`,
  fetchTrendingTvSeries: `trending/tv/day?language=en-US&api_key=${API_KEY}`,
};

export default requests;
