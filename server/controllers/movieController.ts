import Movie from "../models/Movie";

const getMovieById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const movie = await Movie.findById(id);
  
      if (movie) {
        res.send(movie);
      } else {
        res.status(404).send({ message: "Movie not found" });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  };

  const getAllMovies = async(req, res) => {
    const movies = await Movie.find();
    res.send(movies);
  }

  export {getMovieById, getAllMovies}