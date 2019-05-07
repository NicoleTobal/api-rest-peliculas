const { getConnection } = require("../database");
const { selectQuery, updateQuery, deleteQuery } = require("../utils");
 
const insertMovie = (nameMovie, releaseDate, country, director, cb) => {
  query = "INSERT INTO Movies (nameMovie, releaseDate, country, director) VALUES ('" + nameMovie + "', '" + releaseDate + "', '" + country + "', '" + director + "')"
  getConnection().query(query, function (error, results) {
    if (error) throw error;
    cb(results.insertId);
  });
}

const selectMovies = (params, cb) => {
  getConnection().query(selectQuery(params, 'Movies', 'nameMovie', 'nameMovie'), function (error, results) {
    if (error) throw error;
    cb(results);
  });
}

const deleteMovie = (movieId, cb) => {
  getConnection().query(deleteQuery('Movies', 'movieId', movieId), function (error) {
    if (error) throw error;
    cb();
  });
}

const updateMovie = (movieId, newData, cb) => {
  if (Object.keys(newData).length === 0) {
    cb();
    return;
  }
  getConnection().query(updateQuery('Movies', 'movieId', movieId, newData), function (error) {
    if (error) throw error;
    cb();
  });
}

module.exports = {
  insertMovie,
  selectMovies,
  updateMovie,
  deleteMovie
}