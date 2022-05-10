      // * Detectando eventos para navegar entre las paginas de nuestra API

searchFormBtn.addEventListener('click', () => { 
  location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => { 
  location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => { 
  location.hash = '#home';
});


      // ! Funcion navigator para ver en que hash estamos
      
const navigator = () => { 
  console.log( { location }); 
  
  if (location.hash.startsWith('#trends')) { 
    trendsPage()
  } else if (location.hash.startsWith('#search=')) { 
    searchPage();
  } else if (location.hash.startsWith('#movie=')) { 
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) { 
    categoriesPage();
  } else { 
    homePage();
  }

  document.body.scrollTop = 0;    // Esto hace que la pagina haga scroll hacia arriba automaticamente.
  document.documentElement.scrollTop = 0;
}

const homePage = () => { 
  console.log('Home!');

  // ? Agregando el codigo que viene de nodes.js 

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive'); 
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.remove('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.remove('inactive');
  categoriesPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  // ? Llamando las funciones de la hoja main.js

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

const categoriesPage = () => { 
  console.log('Categories!!!');

  // ? Agregando el codigo que viene de nodes.js 

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive'); 
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  // ! obteniendo el ID de la pelicula para por navegar en las categorias
  // const [_, categoryData]; eso es una Destructuracion de array

  const [_, categoryData] = location.hash.split('='); // ['#category', 'id-name'] // * convertimos la url en un array separado por el '=' y luego tomamos el id del segundo valor que nos devuelve split
  const [categoryId, categoryName] = categoryData.split('-');

  headerCategoryTitle.innerHTML = categoryName; // todo: Aqui le cambiamos el titulo a la pagina cuando navegamos entre categorias
  getMoviesByCategory(categoryId);
}

const movieDetailsPage = () => { 
  console.log('Movie!!!');

  // ? Agregando el codigo que viene de nodes.js 

  headerSection.classList.add('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive'); 
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');
}

const searchPage = () => { 
  console.log('Search!');

  // ? Agregando el codigo que viene de nodes.js 

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive'); 
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
}

const trendsPage = () => { 
  console.log('Trends!!!')

  // ? Agregando el codigo que viene de nodes.js 

  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive'); 
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.remove('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
}





window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);  // * Esto activa la funcion navigator cuando el evento hashchange es detectado