const { selectMovies, insertMovie, deleteMovie, updateMovie } = require("../../models/movies/movieModel");
const { insertActor, selectActors, deleteActors } = require("../../models/movies/actorsModel");
const { validateParams } = require("../validations");

const insertActors = (cast, movieId, cb) => {
  cast.map(actor => {
    const { nameActor, surname } = actor;
    insertActor(nameActor, surname, movieId, () => {
      cb();
    });
  })
};

const getMovies = (params, cb) => {
  validateParams(params);
  selectMovies(params, (movies) => {
    const moviesIds = movies.map(movie => movie.movieId);
    selectActors(moviesIds, (actors) => {
      const moviesWithActors = movies.map(movie => {
        const newMovie = Object.assign({}, movie);
        newMovie.cast = actors.filter(actor => actor.movieId === newMovie.movieId);
        return newMovie;
      });
      cb(moviesWithActors);
    });
  });
}

const addMovie = (params, cb) => {
  const { nameMovie, releaseDate, country, director, cast } = params;
  insertMovie(nameMovie, releaseDate, country, director, (movieId) => {
    if (!cast || cast.length === 0) {
      cb();
      return;
    }
    insertActors(cast, movieId, cb);
  });
}

const removeMovie = (movieId, cb) => {
  deleteActors(movieId, () => {
    deleteMovie(movieId, () => {
      cb();
    });
  });
}

const changeMovie = (movieId, data, cb) => {
  const newData = Object.assign({}, data);
  const { cast } = newData;
  delete newData.cast;
  updateMovie(movieId, newData, () => {
    if (!cast) {
      cb();
      return;
    }
    deleteActors(movieId, () => {
      insertActors(cast, movieId, cb);
    });
  });
}

module.exports = {
  getMovies,
  addMovie,
  removeMovie,
  changeMovie
}