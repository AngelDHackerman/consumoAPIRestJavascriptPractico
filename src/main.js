// https://api.themoviedb.org/3/      // * URL base para la API
// https://image.tmdb.org/t/p/w300/    // * URL base para las imagenes

// todo: Ver la rama 'before Axios' para ver como funciona el codigo sin axios.

      // ! Creando instancia de axios

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: { 
    'Content-type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
})

      // ! Imprimiento el poster de las peliculas

const getTrendingMoviesPreview = async () => { 
  const { data } = await api('trending/movie/day');
  const movies = data.results;

  trendingMoviesPreviewList.innerHTML = "";   // todo: Con esto borramos el contenido previo para evitar la repeticion de la lista en nuestra web.

  movies.forEach(movie => {

    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);
    
    movieContainer.appendChild(movieImg);
    trendingMoviesPreviewList.appendChild(movieContainer);
  });
}

      // ! Mostrando el preview de las categorias

const getCategoriesPreview = async () => {
  const { data } = await api('genre/movie/list');
  const categories = data.genres;

  categoriesPreviewList.innerHTML = ""; // todo: Con esto borramos el contenido previo para evitar la repeticion de la lista en nuestra web.

  categories.forEach(category => {
    
    const categoryContainer = document.createElement('div'); 
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');

    categoryTitle.setAttribute('id', `id${category.id}`);

    const categoryTitleText = document.createTextNode(category.name);
    
    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewList.appendChild(categoryContainer);
  })
}

      // ! Llamando a las funciones

// ? Las funciones: getTrendingMoviesPreview() & getCategoriesPreview() 
// ? Estan ubicadas en navigation.js dentro de la funcion homePage();