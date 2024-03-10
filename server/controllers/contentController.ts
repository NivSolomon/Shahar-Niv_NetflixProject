import Content from "../models/Content";
import ListNames from "../Enums/ListNames";
import express from "express";

const getContentById = async (req: express.Request, res: express.Response) => {
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

  const getAllContents = async(req: express.Request, res: express.Response) => {
    const contents = await Content.find();
    console.log(contents);
    res.send(contents);
  }

  const getAllMovies = async(req: express.Request, res: express.Response) => {
    const movies = await Content.find({isSeries: false});
    res.send(movies);
  }

  const getAllSerieses = async(req: express.Request, res: express.Response) => {
    const serieses = await Content.find({isSeries: true});
    res.send(serieses);
  }

  const getByListName = async (req: express.Request, res: express.Response) => {

    const contents = await Content.find();

    const contentsByListNames = {};
    
    for (let i = 0; i < contents.length; i++) {
      for (let y = 0; y < contents[i].listNames.length; y++) {
        const listName = contents[i].listNames[y];
        if (!contentsByListNames[listName]) {
          contentsByListNames[listName] = [];
        }
        contentsByListNames[listName].push(contents[i]);
      }
    }
    res.send(contentsByListNames);

  }


  // const getByListName = async (req, res) => {
  //   try {
  //     const contentsByListNames = await Content.aggregate([
  //       { $unwind: "$listNames" }, 
  //       {
  //         $group: {
  //           _id: "$listNames", 
  //           contents: { $push: "$$ROOT" },
  //         },
  //       },
  //     ]);
  
  //     res.json(contentsByListNames);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };
  

  export {getContentById, getAllContents, getAllMovies, getAllSerieses, getByListName}    
