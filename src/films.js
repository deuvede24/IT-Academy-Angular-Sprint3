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
  let totalScore = Number(
    moviesFromDirector.reduce((total, movie) => total + movie.score, 0)
  );
  let result = totalScore / moviesFromDirector.length.toFixed(2);
  console.log('EXERCICE 3 ->', result);
  return parseFloat(result);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const sortedMovies = array
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b)) //LocalCompare garantiza orden alfabéitco sensible a mayúsuclas-minúsculas y caracteres especiales.
    .slice(0, 20); //las primeras 20
  console.log('EXERCICE 4 ->', sortedMovies);
  return sortedMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // Utilizamos sort() para ordenar las películas por año y luwgo por tittle
  const copyArray = [...array];
  const sortedYearTitle = copyArray.sort((a, b) => {
    if (a.year !== b.year) {
      // Comparamos los años
      return a.year - b.year; // Orden ascendente por año
    } else {
      // Si las películas tienen el mismo año, las ordenamos por tittle
      return a.title.localeCompare(b.title);
    }
  });

  return sortedYearTitle; // Devolvemos el array de películas ordenadas
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(array, genre) {
  // Filtrar movies por genre
  const genreMovies = array.filter((movie) => movie.genre.includes(genre));

  // Si no hay películas del género, retornar 0
  if (genreMovies.length === 0) {
    return 0;
  }

  // Calcular total score de este genre
  const totalScore = parseFloat(
    genreMovies.reduce((total, movie) => total + movie.score, 0)
  );
  // Calcular el resultado average y redondear con dos decimales
  const result = (totalScore / genreMovies.length).toFixed(2);
  // Convertir de nuevo a número antes de retornar
  return parseFloat(result);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  /* const modifyDuration = array.map(movie => {
     //Extraer horas y minutos utilizando el método match y regEx
     const match = movie.duration.match(/(\d+)h (\d+)min/);
 
     if (match) {
       // Calcular la duración en minutos sumando las horas convertidas a minutos y los minutos
       let hoursToMinutes = Number(match[1]) * 60;
       let minutes = Number(match[2]);
       let totalMinutes = hoursToMinutes + minutes;
 
       // Devolver copia del array cambiando la duration por la modificada en minutes
       return {
         ...movie,
         duration: totalMinutes
       };
     } else {
       // Si el formato no coincide, devolver la película sin modificar la duración
       return movie;
     }
   });
 
   return modifyDuration;*/

  const modifyDuration = array.map((movie) => {
    //Copia del array
    let totalMinutes = 0;
    const durationSplit = movie.duration.split(' ');

    for (let part of durationSplit) {
      if (part.includes('h')) {
        let hours = parseInt(part.replace('h', '')); //Extraer las horas eliminando h
        totalMinutes += hours * 60; //Convertir las horas a minutos
      } else if (part.includes('min')) {
        let minutes = parseInt(part.replace('min', '')); //Extraer los minutos eliminando min
        totalMinutes += minutes; //Sumar los minutos a mi total
      }
    }

    return {
      ...movie,
      duration: totalMinutes
    };
  });

  return modifyDuration;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const sameYearBestScore = array
    .filter((movie) => movie.year === year)
    .reduce((a, b) => (a.score > b.score ? a : b));
  //  const bestScore = parseFloat(sameYear.sort((a, b) => ));

  return [sameYearBestScore]; // retornar array
}

//una funció que accepti l'any, i retorni la millor pel·lícula d'aquest any.

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
