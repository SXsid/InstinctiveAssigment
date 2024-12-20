import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react"
import { addUserProp, AllStudentProp, DeleteStudnet, SingleStudentProp, UpdateHandlerProp, } from "../Types/type";

 
export const studentSlice = createApi({
    reducerPath:"dataFetching",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://instinctiveassigment-production.up.railway.app/student/"
    }),
    tagTypes:["All-Students"],
    endpoints:(builder)=>{
        return{
            retriveAll:builder.query({
                query:()=>"/all",
                transformResponse: (response:AllStudentProp) => {
                    if (response &&!response.data) {
                        throw new Error('No data returned');
                       
                    }
                    return response;
                },
                providesTags:["All-Students"]
            }),
            createStudent:builder.mutation<SingleStudentProp,addUserProp>({
                query:(data)=>{
                    return{
                        url:"/add",
                        method:"POST",
                        body:data

                    }
                },
                transformResponse: (response:SingleStudentProp) => {
                    if (response&&response.error) {
                        throw new Error('No data returned');
                       
                    }
                    return response;
                },
                invalidatesTags:["All-Students"]
            }),
            UpdateStudent:builder.mutation<SingleStudentProp,UpdateHandlerProp>({
                query:({id,data})=>{
                    return{
                        url:`/${id}`,
                        method:"PUT",
                        body:data

                    }
                },
                transformResponse: (response:SingleStudentProp) => {
                    if (response&&response.error) {
                        throw new Error('No data returned');
                       
                    }
                    return response;
                },
                invalidatesTags:["All-Students"]
            }),
            deleteStudent:builder.mutation<DeleteStudnet,string>({
                query:(id)=>{
                    return{
                        url:`/${id}`,
                        method:"DELETE",
                    
                    }
                },
                transformResponse: (response:DeleteStudnet) => {

                    if (response&&response.error) {
                        throw new Error('Eror while Delting');
                       
                    }
                    return response;
                },
                invalidatesTags:["All-Students"]
            })
        }
    }

})

export const {useRetriveAllQuery ,
            useCreateStudentMutation,
            useDeleteStudentMutation,
            useUpdateStudentMutation
        } = studentSlice