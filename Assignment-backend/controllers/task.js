import ErrorHandler from "../middleware/error.js";
import { DataModel } from "../models/data_model.js";

export const newTask = async (req, res) => {
    try {
        const { price, volume } = req.body;

        await DataModel.create({
            price,
            volume
        })

        res.status(201).json({
            success: true,
            message: "Task Created Successfully"
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const {id} = req.params;

        const task = await DataModel.findOne({_id: id});

        console.log(task);

        if(!task){
            return next(new ErrorHandler("Invalid Id", 404))
        }

        await DataModel.deleteOne({
            _id: id
        })

        res.status(202).json({
            success: true,
            message: "Task Deleted Successfully"
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const updateTask = async (req, res) => {
    try {
        const {id} = req.params;

        const {price, volume} = req.body;

        const task = await DataModel.findOne({_id: id});

        if(!task){
            return next(new ErrorHandler("Invalid Id", 404))
        }

        task.price = price;
        task.volume = volume;

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task updated successfully"
        })
    } catch (error) {
        console.log(JSON.stringify(error));
        throw new Error(error);
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const task = await DataModel.find();

        res.status(200).json({
            success: true,
            task,
        })

    } catch (error) {
        throw new Error(error);
    }
}