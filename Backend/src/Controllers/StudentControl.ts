import { PrismaClient } from "@prisma/client";
import {addSchema, AddSchemaType, UpdateSchema, UpdateSchemaType} from "../Types/studRouter"
const db= new PrismaClient()

export const CreateStudent=async(payload:AddSchemaType)=>{
     const {success}=addSchema.safeParse(payload)
            if(!success){
                
                return{success:false,status:400,error:"invlaid inputs"
                }
            }
            const {name,cohort,courses,status}=payload
           try{
                const data=await db.student.create({
                    data:{
                        name,
                        cohort,
                        courses,
                        status
    
                    }
                })
           
                return{success:true,status:200,data}
                    
                    
                
                
           }catch(e){
                return {success:false,status:500,error:"failed to create user"}
           }
            
}


export const GetALLStudents=async()=>{
    try{
        const data= await db.student.findMany({
            select:{
                name:true,
                courses:true,
                cohort:true,
                status:true,
                joined_date:true,
                last_login:true,
                id:true
            }
        })
        return {success:true,statusCode:200,data}
    }catch(e){
        console.error("error by retrive all post ",e)
        return {success:false,statusCode:500,error:"can't retive data at this moment"}
    }
}

export const GetStudentById = async (id: string) => {
    try {
      const data = await db.student.findUnique({
        where: { id },
        select: {
          name: true,
          courses: true,
          cohort: true,
          status: true,
          joined_date: true,
          last_login: true,
          id: true
        }
      });
  
      if (!data) {
        return { success: false, statusCode: 404, error: "Student not found" };
      }
  
      return { success: true, statusCode: 200, data };
    } catch (e) {
      console.error("Error retrieving student by ID: ", e);
      return { success: false, statusCode: 500, error: "Can't retrieve data at this moment" };
    }
  };
  export const DeleteStudentById = async (id: string) => {
    try {
      const student = await db.student.findUnique({ where: { id } });
  
      if (!student) {
        return { success: false, statusCode: 404, error: "Student not found" };
      }
  
      await db.student.delete({
        where: { id }
      });
  
      return { success: true, statusCode: 200, data: "Student deleted successfully" };
    } catch (e) {
      console.error("Error deleting student by ID: ", e);
      return { success: false, statusCode: 500, error: "Failed to delete student" };
    }
  };

  export const UpdateStudentById = async (id: string, payload: UpdateSchemaType) => {
    const { success } = UpdateSchema.safeParse(payload);
    
    if (!success) {
      return { success: false, statusCode: 400, error: "Invalid inputs" };
    }
  
    const { name, cohort, courses, status } = payload;
  
    try {
      const student = await db.student.findUnique({ where: { id } });
  
      if (!student) {
        return { success: false, statusCode: 404, error: "Student not found" };
      }
  
      const updatedStudent = await db.student.update({
        where: { id },
        data: { name, cohort, courses, status }
      });
  
      return { success: true, statusCode: 200, data: updatedStudent };
    } catch (e) {
      console.error("Error updating student by ID: ", e);
      return { success: false, statusCode: 500, error: "Failed to update student" };
    }
  };
  
  