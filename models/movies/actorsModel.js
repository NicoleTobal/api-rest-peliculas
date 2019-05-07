const { getConnection } = require("../database");
const { formatArrayToSqlArray, deleteQuery } = require("../utils");

const insertActor = (nameActor, surname, movieId, cb) => {
  query = "INSERT INTO Actors (nameActor, surname, movieId) VALUES ('" + nameActor + "', '" + surname + "', '" + movieId + "')"
  getConnection().query(query, function (error) {
    if (error) throw error;
    cb();
  });
}
 
const selectActors = (moviesId, cb) => {
  const inClause = formatArrayToSqlArray(moviesId);
  const query = 'SELECT * FROM Actors WHERE movieId IN ' + inClause;
  getConnection().query(query, function (error, results) {
    if (error) throw error;
    cb(results);
  });
}

const deleteActors = (movieId, cb) => {
  getConnection().query(deleteQuery('Actors', 'movieId', movieId), function (error) {
    if (error) throw error;
    cb();
  });
}

module.exports = {
  insertActor,
  selectActors,
  deleteActors
}