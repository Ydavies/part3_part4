//setting the movie class
class Movie {
  constructor(movieId, title, year, rating) {
    this.movieID = movieId;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}

const movieList = [
  { movieId: "6", title: "Pulp Fiction", year: "1994", rating: "8.9" },
  { movieId: "2", title: "Django Unchained", year: "2012", rating: "7.8" },
  { movieId: "4", title: "Back to the Future", year: "1985", rating: "8.5" },
  { movieId: "7", title: "Aliens", year: "1986", rating: "8.4" },
  { movieId: "5", title: "Inception", year: "2010", rating: "8.8" },
  { movieId: "9", title: "Fight Club", year: "1999", rating: "8.8" },
  { movieId: "3", title: "The Departed", year: "2006", rating: "8.5" },
  { movieId: "10", title: "The Hateful Eight", year: "2015", rating: "7.8" },
  { movieId: "1", title: "The Matrix", year: "1999", rating: "8.7" },
  { movieId: "8", title: "Interstellar", year: "2014", rating: "8.7" },
];

// const movieSorted = movieList.sort((a, b) => a.movieID - b.movieID);
// console.log(movieSorted);

// After not being able to get the array to sort i asked chatGTP and found that it was sorting it by a string and not a number, so i changed it to parseInt

movieList.sort((a, b) => parseInt(a.movieId) - parseInt(b.movieId));
console.log(movieList);

// What are we searching for?
let Result = "21";
// creating a search function
function movieIdsearch(movieList, movieId) {
  // if not found then we set the value to -1
  let found = -1;
  // console.log(`Array: ${movieList}`);
  console.log(`Searching for: Movie ${movieId}`);
  //Search the array by creating a loop
  for (let i = 0; i < movieList.length; i++) {

    // we can uncomment the below code if we want to show a console log of each search process that is completed.
    // console.log(`movieList[${i}]: ${movieList[i].movieId}`);

    if (movieList[i].movieId === movieId) {
      found = i;
      // end the loop
      break;
    }
  }
  return found;
}
// Calling the function
const result = movieIdsearch(movieList, Result);
// Output of result
if (result == -1) {
  console.log(`Result: nul`);
} else {
  console.log(`The Movie of ${Result} was found at index ${result}`);
}
