// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => movie.director);
    return allDirectors;
  }
  console.log(getAllDirectors(movies));
  


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    return moviesArray.filter(movie =>
        movie.director === "Steven Spielberg" &&
        movie.genre.includes("Drama")
      ) .length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    
      const averageMovieScore = moviesArray.reduce(
        (acc, movie) => acc + movie.score,
        0
      );
      const calculateAverage = averageMovieScore / moviesArray.length;
      const roundedAverage = Number(calculateAverage.toFixed(2));
      return roundedAverage;
    }


// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesScore(moviesArray) {
        const dramas = moviesArray.filter((movie) => movie.genre.includes("Drama"));
      
        if (dramas.length === 0) {
          return 0;
        }
      
        const ratingSum = dramas.reduce((acc, drama) => acc + drama.score, 0);
      
        const ratingAve = ratingSum / dramas.length;
      
        console.log(ratingAve);
        return ratingAve;
      }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title - b.title;
        }
      });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    const sortedNames = moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  return sortedNames;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    function durationToMinutes(movie) {
        if (typeof movie.duration === "number") {
          return movie;
        }
    
        movieDuration = movie.duration;
    
        const timeString = movieDuration.split(" ");
        // Example:
        // "2h 22min"   ["2h", "22min"]
        // "2h"   ["2h"]
        // "22min"  ["22min"]
    
        const minutesDuration = timeString.reduce(function (total, string) {
          if (string.includes("h")) {
            const numOfHours = parseInt(string);
            return total + numOfHours * 60;
          } else {
            const numOfMinutes = parseInt(string);
            return total + numOfMinutes;
          }
        }, 0);
    
        movie.duration = minutesDuration;
        return movie;
      }
      const newArr = moviesArray.map(function (movie) {
        return durationToMinutes(movie);
      });
    
      return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
    if (!moviesArray.length) {
        return null;
      }
    
      const dictionary = {};
      moviesArray.forEach(function (movie) {
        if (!dictionary[movie.year]) {
          dictionary[movie.year] = [];
          dictionary[movie.year].push(movie);
        } else {
          dictionary[movie.year].push(movie);
        }
      });
    
      let highest = 0;
      let bestYear;
    
      for (const year in dictionary) {
        const currentYearAverage = scoresAverage(dictionary[year]);
    
        if (currentYearAverage > highest) {
          highest = currentYearAverage;
          bestYear = year;
        } else if (currentYearAverage === highest) {
          // Check which year is the lowest and save it to the `oldestYear`
          const oldestYear = year < bestYear ? year : bestYear;
          bestYear = oldestYear;
        }
      }
      return `The best year was ${bestYear} with an average score of ${highest}`;
}
