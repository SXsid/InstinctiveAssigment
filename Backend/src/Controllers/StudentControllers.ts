import { Request, Response } from "express";
import StudentServices from "../Services/StudentServices";

class StudenControllers{
    static async handleCreateUser(req:Request,res:Response){
        const payload = req.body
        const response= await StudentServices.CreateUser(payload)
        res.status(response.status).json({
            ...response
        })
    }
    static async handleDeleteById(req:Request,res:Response){
        const {id }= req.params
        const response = await StudentServices.DeleteStudentById(id)
        res.status(response.statusCode).json({
            ...response
        })
    }
    static async handleGetAllUsers (req:Request,res:Response){
        
        const response = await StudentServices.GetALLStudents()
        res.status(response.statusCode).json({
            ...response
        })
    }
    static async handleGetUserById (req:Request,res:Response){
        
         const {id }= req.params
            const response = await StudentServices.GetStudentById(id)
            res.status(response.statusCode).json({
                ...response
            })
    }
    static async handleUpdateUser (req:Request,res:Response){
        
         const {id }= req.params
             const payload = req.body
             const response = await StudentServices.UpdateStudentById(id,payload)
             res.status(response.statusCode).json({
                 ...response
             })
    }
}

export default StudenControllers