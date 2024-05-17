# Sprint 3 IT Academy | Video management tool

## Introduction

A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.

You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.

<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository
```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>

## Tests!


```shell
$ npm install
$ npm run test:watch
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

Apart from the statement, you will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, all tests are already defined here!

<br>

## Instructions

You have the following indications from the frontend responsible:

- It is mandatory to implement all loops in ES6 (using map, reduce, filter and sort to manipulate arrays).

- As at the moment we don't consume data from a server using an API, we will work with data from the src/data.js archive. For the moment we will implement the logic using
an array of information about 250 movies.

- The implementation is about processing this array of movies, to display it as requested in each exercise.

- The logic to implement will be placed in the src/films.js file.

- You don't need to show the result of each function on the screen. Your goal is to pass the tests.  More information on how to program oriented to pass tests at the end of the document.

- Don't forget to include the capture of the test results in the virtual campus.

-------------------------------------------------------------------------------------------------------------------------------

En este sprint comenzaremos a hacer testing de la mano de Jest, que es un framework de pruebas para JS enfocado en la simplicidad. Gracias a Jest podremos testear en cada momento, conforma vayamos avanznaod en nuestro sprint, las funciones que implementaremos en el core de nuestra aplicación para cumplir con lo que el cliente nos pide, procesando los datos que nos han facilitado.

Tenemos un total de 8 ejercicios(funciones realizadas), en 7 de ellos seguimos punto por punto lo que el test, que ya estaba hecho, nos dicta para poder crear las funciones de cada ejercicio sin presentar errores. En el ejercicio 6 además de crear la función también he creado el test que garantiza su implementación.

Aquí la explicación de cada ejercicio realizado en este sprint:

Ex1. Mostrar por pantalla al usuario solo los directores de las películas en un array: Aquí he utilizado el método map que convierte el array de movies en un nuevo array (sin modificar el original) sobre el cual se itera y que contendrá solo el director de cada película.

Ex2. Mostrar las películas de un determinado director/a: Aquí he utilizado el método filter para iterar sobre cada elemento del array que contendrá solo las películas dirigidas por el director especificado que nos llega como parámentro de la función y que previamente comparamos su coincidencia con los elmentos de nuestro array movies.

Ex3. Calcular el score promedio de las películas de un director en concreto: Aquí he hecho uso de la función del ejercicio 2 que ya que ya me filtra las películas de un director en concreto almacenando este array en "moviesFromDirector", después con el método reduce iteramos sobre cada película en moviesFromDirector y sumamos sus puntuaciones que luego dividimos entre los elementos del array para finalmente presentar el resultado de dicha operacióncon 2 decimales así:  totalScore / moviesFromDirector.length.toFixed(2).

Ex4. Crear una función que recibiendo un array de pelćiulas devuelva las primeras 20 en orden alfabético: Aquí utilizo de nuevo el método map para crear un nuevo array con solo los títulos de las películas [((movie) => movie.title)], después con el método sort ordeno el array de títulos alfabéticamente haciendo uso de "localeCompare" que es un método que compara dos cadenas y devuelve un número indicando si la cadena de referencia va antes, después o es igual a la cadena dada en el orden alfabético [((a, b) => a.localeCompare(b))] y por útimo utilizo slice para extraer los primeros 20 títulos del array ya ordenado.

Ex5. Implementar una función que recibiendo un array de películas, regrese un array con las movies ordenadas por año de forma ascendente y, si las películas tienen el mismo año, ordenarlas alfabéticamente por título: Aquí utilizo el spread ... para crear una copia supeperficial del array original, esto asegura que el original no sea modificado. Después con el método sort checamos si los años de las dos películas son diferentes [if(a.year !== b.year)], si es así entonces se resta el año de 'a' del año de 'b' para obetner un orden ascendente a.year - b.year, y en el caso de que los años de las películas sean iguales entones volvemos a hacer uso de "localCompare" para ordenarlas alfabéticamente, a.title.localeCompare(b.title).

Ex6. En este ejercicio hemos de calcular la puntuación promedio (score) de las películas de un género específico: Lo primero que hacemos aquí es, con el método filter, crear un nuevo array (genreMovies) que contiene solo las películas que incluyen el género especificado en su propiedad genre, si tenemos coincidencias de este género entonces con el método reduce hacemos la suma total de los scores de estas movies reduce [((total, movie) => total + movie.score, 0)] y finalmente calculamos el score promedio de la películas del genre especificado, con 2 decimales, dividiendo el totalScore entre el length del array así:(totalScore / genreMovies.length).toFixed(2).

Aquí tenemos un resumen del test antes mencionado que cree para este ejercicio: 
- Declaración: Verifica que la función exista y esté correctamente declarada.
- Tipo de Retorno: Asegura que la función devuelve un número.
- Validación del Retorno: Verifica que el resultado no sea NaN.
- Precisión del Resultado: Comprueba que el promedio calculado sea correcto y se muestre con dos decimales.


Ex7. Crear una función donde recibiendo un array de películes, regresemos un array cpn estas mismas pero con la duración modificada solo en minutos. Aquí hemos de utilizar el método split para poder extraer el valor total (de la propiedad duration) tanto de horas como de minutos y haciendo las operaciones pertinentes poder calcular y modificar el formato de esta propiedad a minutos. Primero utilizamos el método map para crear un nuevo array (modifyDuration) en el cual modificaremos la propiedad duration de cada película luego dividimos la cadena duration en partes separadas por un espacio utilizando split(' '), [durationSplit = movie.duration.split(' ')] utilizando un bucle for...of iteramos sobre cada parte de durationSplit primero verificando dentro del bucle si tenemos horas, la cuales multiplicaremos por 60 para convertirlas a minutos y las sumaremos a nuestra variables totalMinutes, donde además añadiremos los minutos que obtendremos a continuación en caso de haberlos. Por último creamos un nuevo objeto movie con duration modificada con el nuevo formato en minutos utilizando spread ...movie / duration: totalMinutes.

Ex8. Encontrar la movie con el mejor score de un año específico y devolverla dentro de un array: lo primero que hacemos es utilizar el método filter para crear un nuevo array (sameYearMovies) que contiene solo las películas que fueron lanzadas en el año especificado. Después con reduce y el operador ternario iteramos sobre el array para encontrar, con una comparación simple, la película con el mayor score. En este ejercicio el test nos especifica que el resultado de la función debe de ser retornado en formato array, y es por esto que utilizamos los corchetes en nuestro return para garantizar que así sea: "return [sameYearBestScore]. *En otros ejercicios la naturaleza de los métodos utilizamos como .map ya aseguran que el retorno sea un array, en este caso envolvemos con corchetes el return para poder garantizar edicho retorno cumpliendo con lo que el test nos pide.







