      // ! Funcion navigator para ver en que hash stamos
      
const navigator = () => { 
  console.log( { location }); 
  
  if (location.hash.startsWith('#trends')) { 
    trendsPage()
  } else if (location.hash.startsWith('#search=')) { 
    searchPage();
  } else if (location.hash.startsWith('#movie=')) { 
    moviePage();
  } else if (location.hash.startsWith('#category=')) { 
    categoriesPage();
  } else { 
    homePage();
  }
}

const trendsPage = () => { 
  console.log('Trends!!!')
}

const searchPage = () => { 
  console.log('Search!');
}

const moviePage = () => { 
  console.log('Movie!!!');
}

const categoriesPage = () => { 
  console.log('Categories!!!');
}

const homePage = () => { 
  console.log('Home!');

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false); 