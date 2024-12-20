
import { PrismaClient } from "@prisma/client";
import {addSchema, AddSchemaType} from "../Types/StudentType"
const db= new PrismaClient()

class StudentServices{
    static async CreateUser(payload:AddSchemaType){
        
        
        const {success}=addSchema.safeParse(payload)
        
        
        if(!success){
            
            return{success:false,status:400,error:"invlaid inputs"
            }
        }
        const {name,cohort,subject,class:divison,status,joined_date}=payload
        const courses=subject.map(value=>{
          return {
            name:divison +" "+ value
          }
        })
        //@ts-ignore
        
        try{
            const data=await db.student.create({
                data:{
                    name,
                    cohort,
                    courses,
                    status,
                    joined_date

                }
            })
        
            return{success:true,status:200,data}
                
                
            
            
        }catch(e){
            return {success:false,status:500,error:"failed to create user"}
        }
    }

    
    
    static async DeleteStudentById (id: string){
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
      
      
      
    static async GetALLStudents(){
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
              if(data){
                return {success:true,statusCode:200,data}
              }
              return {success:false,statusCode:500,error:"can't retive data at this moment"}
          }catch(e){
              console.error("error by retrive all post ",e)
              return {success:false,statusCode:500,error:"can't retive data at this moment"}
          }
      }
        
    static async GetStudentById(id: string){
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
        
        
        
    
    
     static async UpdateStudentById(id: string, payload: AddSchemaType){
            const { success } = addSchema.safeParse(payload);
            
            if (!success) {
              return { success: false, statusCode: 400, error: "Invalid inputs" };
            }
          
          
            try {
              const student = await db.student.findUnique({ where: { id } });
          
              if (!student) {
                return { success: false, statusCode: 404, error: "Student not found" };
              }
                const {name,cohort,subject,class:divison,status,joined_date}=payload
                    const courses=subject.map(value=>{
                      return {
                        name:divison +" "+ value
                      }
                    })
                    
              const updatedStudent = await db.student.update({
                where: { id },
                data: { 
                  name,
                  cohort,
                  courses,
                  status,
                  joined_date

                 }
              });
          
              return { success: true, statusCode: 200, data: updatedStudent };
            } catch (e) {
              console.error("Error updating student by ID: ", e);
              return { success: false, statusCode: 500, error: "Failed to update student" };
            }
          };
          
        
}

export default StudentServices