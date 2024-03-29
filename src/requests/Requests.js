const API_KEY = "764f7c9744867f406a4f2f298992f079";  // added api key with it 


const requests =   {
  // fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // api key will be different for every genre 

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
//https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US
export default requests;
// requests sent
// https://image.tmdb.org/t/p/original/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US