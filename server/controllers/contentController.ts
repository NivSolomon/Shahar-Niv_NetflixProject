import Content from "../models/Content";

const getContentById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const content = await Content.findById(id);
  
      if (content) {
        res.send(content);
      } else {
        res.status(404).send({ message: "content not found" });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  };

  const getAllContents = async(req, res) => {
    const contents = await Content.find();
    res.send(contents);
  }

  const getAllMovies = async(req, res) => {
    const movies = await Content.find({isSeries: false});
    res.send(movies);
  }

  const getAllSerieses = async(req, res) => {
    const serieses = await Content.find({isSeries: true});
    res.send(serieses);
  }

  export {getContentById, getAllContents, getAllMovies, getAllSerieses}