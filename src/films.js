// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;

  /*let result =  ???;
  console.log("EXERCICE 1 ->", result);
  return result;*/
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  /* let moviesFromDirector = array.filter((movie) => movie.director === director);
   let totalScore = moviesFromDirector.reduce((total, movie) => total + movie.score, 0);
   let result = (totalScore / moviesFromDirector.length).toFixed(2);
   return parseFloat(result);*/
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let totalScore = Number(moviesFromDirector.reduce((total, movie) => total + movie.score, 0));
  let result = totalScore / moviesFromDirector.length.toFixed(2)
  console.log('EXERCICE 3 ->', result);
  return parseFloat(result);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const sortedMovies = array
    .map((movie) => movie.title)
    .sort((a, b)=> a.localeCompare(b)) //LocalCompare garantiza el orden alfabéitco sensible a mayúsuclas-minúsculas y caracteres especiales.
      .slice(0, 20); //las primeras 20
      console.log('EXERCICE 4 ->', sortedMovies);
  return sortedMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    // Utilizamos sort() para ordenar las películas por año y luwgo por tittle
    const copyArray = [...array]
    const sortedYearTitle = copyArray.sort((a, b) => {
      if (a.year !== b.year) {  // Comparamos los años
        return a.year - b.year; // Orden ascendente por año
      } else {  // Si las películas tienen el mismo año, las ordenamos por tittle
        return a.title.localeCompare(b.title);
      }
      
    });
  
    return sortedYearTitle; // Devolvemos el array de películas ordenadas
  }
  
  

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() { }

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() { }

// Exercise 8: Get the best film of a year
function bestFilmOfYear() { }

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
