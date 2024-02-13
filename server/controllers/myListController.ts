import mongoose from "mongoose";
import Content from "../models/Content";
import User from "../models/User";
import { getUserById } from "./userController";

const getAllList = async (req, res) => {
    const id = req.body.id;
    try {
        const user = await User.find({_id: id}).populate('myList');
        if (!user) {
            return res.status(404).send('User not found');
        }
        const contentList = user.myList;
        res.status(200).send(contentList);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}




const addNewContent = () => {

}

export {getAllList, addNewContent}