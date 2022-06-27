// The `movies` array from the file `src/data.js`.
const movies = require("./data")

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirector = movies.map((film) => {
    return film.director
  });
  return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielberg = movies.filter((director) => director.director === "Steven Spielberg" && director.genre.includes("Drama"));
  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length == 0){return 0}
  
  const averageScore = moviesArray.reduce(
    
    (acc, el) => acc += el.score? el.score:0,0
  );
  return  Number((averageScore/moviesArray.length).toFixed(2))
  
  
}


scoresAverage(movies); 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
 
  const dramaMoviesArr = moviesArray.filter((peli,index)=>{
    return peli.genre.includes('Drama')})
  
    if(dramaMoviesArr.length === 0){return 0}
    const averageDramaScore = dramaMoviesArr.reduce(
    //Recordar ternarias
    (acc, el) => acc += el.score? el.score:0,0
  );
  return  Number((averageDramaScore/dramaMoviesArr.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let clonedArray = [...moviesArray]
  
  clonedArray.sort((a,b)=>{
    if(a.year === b.year){
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    }
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    return 0;
  })

  return clonedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let clonedArray = [...moviesArray]
  
  clonedArray.sort((a,b)=>{
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  })

  let strClonedArray = clonedArray.map((element,index)=>element.title)
  
  return strClonedArray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
