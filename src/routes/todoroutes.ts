import * as express from 'express';
import {Request,Response} from 'express';
import { add,getall,gets,upd,dlt } from "../controller/todocontroller";
const router = express.Router()
// router.get('/api/todo',(req:Request,res:Response)=>{
//     res.send("hey there");
// })
router.post('/api/todo',add);
router.get('/api/todo',getall);
router.get('/api/todo/:id',gets);
router.put('/api/todo/:id',upd);
router.delete('/api/todo/:id',dlt);
export{router as TodoRouter}