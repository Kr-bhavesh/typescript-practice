import {Router} from 'express';
import { add,getall,gets,upd,dlt } from "../controller/todocontroller";
const router = Router()
// router.get('/api/todo',(req:Request,res:Response)=>{
//     res.send("hey there");
// })
router.post('/api/todo',add);//route to insert 
router.get('/api/todo',getall);//route to get all data
router.get('/api/todo/:id',gets);//route to get single record
router.put('/api/todo/:id',upd);//route to update
router.delete('/api/todo/:id',dlt);//route to delete
export{router as TodoRouter}