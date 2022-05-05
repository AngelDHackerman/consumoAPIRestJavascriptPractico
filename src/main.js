// https://api.themoviedb.org/3/

const getTrendingMoviesPreview = async () => { 
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();

  const movies = data.results;
}

getTrendingMoviesPreview();