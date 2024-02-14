import mongoose from "mongoose";
import Content from "../models/Content";
import User from "../models/User";
import { getUserById } from "./userController";

// TODO:
const getAllList = async (req, res) => {
    const userId = req.body._id;
    try {
        const user = await User.findOne({_id: userId}).populate('myList');
        if (!user) {
            return res.status(404).send('User not found');
        }
        const contentsList = user.myList;
        res.status(200).send(contentsList);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}




const addNewContent = () => {

}

export {getAllList, addNewContent}