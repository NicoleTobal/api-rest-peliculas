const fastify = require('fastify')({ logger: true });
const { initializeConnection } = require("./models/database");
const { getMovies, addMovie, removeMovie, changeMovie } = require("./controllers/movies/movieController");

/*
** @params filter (string)
** @params pageSize (numeric)
** @params pageNumber (numeric)
*/
fastify.get('/movies', async (request, reply) => {
  getMovies(request.query, (movies) => {
    reply.send(movies);
  });
})


/*
** @params nameMovie (string)
** @params releaseDate (datetime, 'yyyy-MM-dd HH:mm:ss.S')
** @params country (string)
** @params director (string)
** @params cast (actors array. Actor:
**      @params nameActor (string)
**      @params surname (string)
**    )
*/
fastify.post('/movie', async (request, reply) => {
  addMovie(JSON.parse(request.body), () => {
    reply.code(200).send("La película fue agregada");
  });
})


/*
** @params movieId (numeric)
*/
fastify.delete('/movie/:movieId', async (request, reply) => {
  const { movieId } = request.params;
  removeMovie(movieId, () => {
    reply.code(200).send("La película fue eliminada");
  });
})

/*
** @params movieId (numeric)
** @params nameMovie (string)
** @params releaseDate (datetime, 'yyyy-MM-dd HH:mm:ss.S')
** @params country (string)
** @params director (string)
** @params cast (actors array. Actor:
**      @params nameActor (string)
**      @params surname (string)
**    )
*/
fastify.patch('/movie/:movieId', async (request, reply) => {
  const { movieId } = request.params;
  changeMovie(movieId, JSON.parse(request.body), () => {
    reply.send(200);
  });
})

const start = async () => {
  try {
    await fastify.listen(3000)
    initializeConnection();
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();