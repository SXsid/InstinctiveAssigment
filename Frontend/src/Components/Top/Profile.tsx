
import pic from "../../assets/profileImage.png"
function Profile({name}:{name:string}) {
  return (
    <div className="ml-4 lg:ml-0">
        <div className="flex items-center gap-5 ">
      <span className='w-[40px] h-[40px] bg-[#FFCD66] rounded-lg overflow-hidden hidden lg:block'>
        <img  width={40} height={40}  src={pic}/>
      </span>
      <span 
      title="name" 
      className="text-[18px] leading-6 font-semibold text-customBlue font-sans">
        {name}</span>
    </div>
    </div>
  )
}

export default Profile
