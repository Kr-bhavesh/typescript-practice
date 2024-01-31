import { mymodel } from "../models/todo";
import { Request,Response } from "express";
const add_todo = async (req:Request,res:Response): Promise<void> => {
    //creates a collection in db with provided data
    try {
      const product = await mymodel.create(req.body);
      res.status(200).json(product);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
};
const get_all_todo =async (req:Request,res:Response): Promise<void>=> {
    try {//gets all the data avialable in the collection
        const data = await mymodel.find({});
        console.log(typeof data);
        res.status(200).json(data);
        
    } catch (error:any) {
        res.status(500).json({message: error.message})
    }
    
}
const get_single_todo =async (req:Request,res:Response): Promise<void> => {
    try {//gets single record from the collection
        const {id} = req.params;
        const data = await mymodel.findById(id);
        res.status(200).json(data);
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
    
}
const update_todo =async (req:Request,res:Response): Promise<void> => {
    try {//updates record of given id
        const {id} = req.params;
        const data = await mymodel.findByIdAndUpdate(id,req.body);
        const upd_data = await mymodel.findById(id);
        res.status(200).json(upd_data);
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}
const delete_todo =async (req:Request,res:Response): Promise<void> => {
    try {//deleted record of given id
        const {id} = req.params;
        const data = await mymodel.findByIdAndDelete(id);
        res.status(200).json({message:'delete successfull'});
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}
export{
    add_todo as add,
    get_all_todo as getall,
    get_single_todo as gets,
    update_todo as upd,
    delete_todo as dlt
}


