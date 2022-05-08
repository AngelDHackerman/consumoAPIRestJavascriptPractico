      // ! Funcion navigator para ver en que hash stamos
      
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
  searchForm.classList.add('inactive');

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
}

const trendsPage = () => { 
  console.log('Trends!!!')
}





window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false); 