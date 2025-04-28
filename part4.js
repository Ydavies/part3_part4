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
  { movieId: "7", title: "Interstellar", year: "2014", rating: "8.7" },
];
console.log(movieList);
