import { useNavigate } from "react-router-dom"



function AddButton() {
  const navigate = useNavigate()
  return (
    <button 
    onClick={()=>navigate("/add",{replace:true})}
    className='bg-selectBG text-greySelect w-[197px] px-[15px] py-[7px] h-[36px] rounded-md font-bold text-[16px]'>
      + Add New Student
    </button>
  )
}

export default AddButton
