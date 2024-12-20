import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateStudentProp ,addUserProp,createStudentSchema} from '../Types/type';
import {cbseClasses,academicYears,courseOptions, statusOptions} from "../Options"
import LabelSelect from './LabelSlect';
import LabelInput from './LabelInput';
import { useCreateStudentMutation, useUpdateStudentMutation } from '../Redux/StudenSlice';
import { useNavigate } from 'react-router-dom';



const StudentFormCard = ({student,}: {student?: UpdateStudentProp}) => {
  
    const [addStudent,{isError,error,isLoading,isSuccess}] =useCreateStudentMutation()
    const [updateStudent,{isLoading:updateLoder,isSuccess:updateSucess}] =useUpdateStudentMutation()
    if(isError) console.error(error);
    
    const navigate = useNavigate()
    const {register,handleSubmit,formState: { errors },reset} = useForm(
           {resolver: zodResolver(createStudentSchema),
              defaultValues: student || {
                cohort: '',
                name: '',
                class: '',
                subject: [],
                status: "Active",
                joined_date: '',
              },
            });


  const handleFormSubmit = (data: addUserProp) => {
    
   
    if(student) {
      const id=student.id
      const updatedData ={
        ...data,
        id
      }
      updateStudent({
        id,
        data:updatedData
      })
      
    }else{
      addStudent(data)
    }
    reset()

  };
  
  if (isSuccess || updateSucess) {
    alert(updateSucess? "Student updated successfully" : "Student added successfully");
    navigate("/student")
    
  }
  
  return (
    <div  className='flex justify-center  items-center h-screen px-12'>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>} 
      <div className="max-w-lg w-full mt-4 bg-white rounded-lg shadow-md p-6 ">
        <h2 className="text-xl font-semibold mb-6 text-black ">
          {student ? 'Update Student' : 'Add New Student'}
        </h2>

        <form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off" className="space-y-4">
          
          
            <LabelInput label='Student Name' type='text' register={register} errors={errors} name='name' placeholder="Enter student name"/>

            <LabelSelect options={academicYears} name='cohort' errors={errors} register={register} label='Cohort'/>
            
            <LabelSelect options={cbseClasses} name='class' errors={errors} register={register} label='Class'/>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Subjects</label>
            <div className="space-y-2">
              {courseOptions.map((course) => (
                <div key={course} className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('subject')}
                    value={course}
                    className="mr-2"
                  />
                  <span>{course}</span>
                </div>
              ))}
            </div>
            {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
          </div>
          
            <LabelInput label='Joined Date' type='date' register={register} errors={errors} name='joined_date'/>
          <LabelSelect options={statusOptions} name='status' errors={errors} register={register} label='Status'/>
          
          <button
          
            type="submit"
            className="w-full px-4 py-2 text-greytext  bg-greybg rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-6"
          >
            {isLoading ? "submitting" :updateLoder?"Updating..":student  ? 'Update Student' : 'Add Student'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentFormCard;
