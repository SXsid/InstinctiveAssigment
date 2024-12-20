import { useEffect } from "react";
import { SingleStudentProp,  } from "../Types/type";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/Store/Store";
import { setError, setloading, setStudent } from "../Redux/signleStudetnSlice";

export const useStudentById = (id: string) => {
 
const dispatch= useDispatch<AppDispatch>()
  useEffect(() => {
    async function fetchStudent() {
      try {
        dispatch(setloading(true))
        dispatch(setError(""))
        const res = await fetch(`https://instinctiveassigment-production.up.railway.app/student/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        const data: SingleStudentProp = await res.json()
        if (data && data.data) {
          dispatch(setStudent(data.data))
        } else {
          throw new Error("No student data found.")
        }
      } catch (e: any) {
       dispatch(setError(e?.message||"Erro while fetching"))
      } finally {
        dispatch(setloading(false))
      }
    }

    if (id) {
      fetchStudent()
    }
  }, [id])
  return {}

}
