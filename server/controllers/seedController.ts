import data from '../data/newData';
import Content from '../models/Content';
import User from '../models/User';
import express from 'express';

// initializing and resetting the database with sample data- helpful for testing process
const seedData = async (req: express.Request, res: express.Response) =>{
    await User.deleteMany();
    await Content.deleteMany();

    const users = await User.insertMany(data.users)
    const contents = await Content.insertMany(data.contents)
    res.send({users, contents});
}

export default seedData;