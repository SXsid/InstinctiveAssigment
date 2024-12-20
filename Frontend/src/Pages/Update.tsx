import  { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/Store/Store'
import StudentFormCard from '../Components/AddCard'
import { UpdateStudentProp } from '../Types/type'

function Update() {
    const {student}=useSelector((state:RootState)=>state.singleStudent)
    if(!student) return <div>404 error</div>
    const data = useMemo(()=>{
        const Class= student?.courses[0].name.split(" ",2).join(" ")
     const course= student?.courses.map(value=>{
            return value.name.split(" ")[2]
        })
        return{Class,course}
    },[student])

const Student:UpdateStudentProp={
            name:student?.name,
            joined_date:student.joined_date,
            class:data.Class,
            cohort: student.cohort,
            subject:data.course,
            id:student.id,
            status:student.status

}
console.log(Student);

  return (
    <div>
      <StudentFormCard student={Student}/>
    </div>
  )
}

export default Update
