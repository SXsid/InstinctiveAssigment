import {  useNavigate, useLocation } from 'react-router-dom';
import ShowCard from '../Components/ShowCard';
import ShowCardSkeleton from '../Components/Skeleton/ShowCardSkelton';
import { useStudentById } from '../Hooks/Show';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/Store/Store';
import { useDeleteStudentMutation } from '../Redux/StudenSlice';

const Show= () => {
    const {pathname} = useLocation();
    const studentId=pathname.split("/")[2]
    useStudentById(studentId)
    
    const {student,isLoading,error} = useSelector((state:RootState)=>state.singleStudent)
    const navigate = useNavigate();
    const [deleteStudent,{isLoading:delLoader,isSuccess:delSucess}]=useDeleteStudentMutation()
   
    const handleClose = () => {
        navigate('..', { replace: true });
    };

   const onDelete=()=>{
        deleteStudent(studentId)
   }
   const onEdit=()=>{
    navigate("/update")
   }
   if(delSucess){
    alert("deleted student")
    navigate("/student")
   }
    return (
       
        <>
            {(isLoading || delLoader) && <ShowCardSkeleton/>}
            {!isLoading && !error &&student&& !delLoader&&
            
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <div className="relative w-full h-full flex items-center justify-center p-4">
                <ShowCard
                    student={student}
                    onClose={handleClose}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </div>
            </div>
            }
          
        </>
    );
};

export default Show;