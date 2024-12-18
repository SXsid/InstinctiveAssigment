import {Router} from "express";
import { CreateStudent, DeleteStudentById, GetALLStudents, GetStudentById, UpdateStudentById } from "../Controllers/StudentControl";

const router= Router()

router.get("/all",async(req,res)=>{
    const response = await GetALLStudents()
    res.status(response.statusCode).json({
        ...response
    })
    
})
router.get("/:id",async(req,res)=>{
    const {id }= req.params
    const response = await GetStudentById(id)
    res.status(response.statusCode).json({
        ...response
    })

})
router.put("/:id",async(req,res)=>{
    const {id }= req.params
    const payload = req.body
    const response = await UpdateStudentById(id,payload)
    res.status(response.statusCode).json({
        ...response
    })

})
router.post("/add",async(req,res)=>{
        const payload = req.body
        const response = await CreateStudent(payload)
        

        res.status(response.status).json({
            ...response
})
        
       
})
router.delete("/:id",async(req,res)=>{
    const {id }= req.params
    const response = await DeleteStudentById(id)
    res.status(response.statusCode).json({
        ...response
    })

})

export default router