import z from "zod"
export interface StudentProp{
    name: string;
    courses: {name:string}[];
    cohort: string;
    status: "Active"|"Inactive";
    joined_date: string;
    last_login: string;
    id: string;
}
export interface UpdateStudentProp{
    name: string;
    subject: string[];
    cohort: string;
    status: "Active"|"Inactive";
    joined_date: string;
    class:string,
    id: string;
}
export type addUserProp = Omit<UpdateStudentProp,'id'>
interface CommonResponse<T> {
    success: boolean;       
    error?: string;    
    data?:T    

}
export type AllStudentProp=CommonResponse<StudentProp[]>

export type  SingleStudentProp =CommonResponse<StudentProp>
export type DeleteStudnet = CommonResponse<"studnet dleted sucesfuly">
export interface UpdateHandlerProp{
    data:UpdateStudentProp,
    id:string
}
export const createStudentSchema = z.object({
  name: z.string().nonempty("Name is required"),
  cohort: z.string().nonempty("Cohort is required"),
  status: z.enum(["Active","Inactive"]),
  subject: z.array(z.string()).min(1, "At least one subject must be selected"), 
  class: z.string().nonempty("Class is required"),
  joined_date: z.string().nonempty("Joined date is required"),
});