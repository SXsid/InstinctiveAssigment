
import { FaCalculator } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi"
import { RiEnglishInput } from "react-icons/ri";
import { StudentProp } from "../Types/type";
import { Outlet, useNavigate } from "react-router-dom";



export function formatDate({dateString,type}:{dateString:string,type:"date"|"dateTime"}) {
  const date = new Date(dateString);

  const optionsDate: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,  
  };
  if(type==="dateTime") return date.toLocaleDateString('en-GB', optionsTime)
  return date.toLocaleDateString('en-GB', optionsDate);

}



const StudentTable = ({Students}:{Students:StudentProp[]|undefined}) => {
  
  

const navigate =useNavigate()
  
 
 const couseIcon=({type}:{type:string})=>{
    if(type.includes("Math")) return <FaCalculator className="hidden sm:block"/>
    else if(type.includes("Science")) return <GiMaterialsScience className="hidden sm:block"/>
    else return <RiEnglishInput className="hidden sm:block"/>
 }

  return (
    <div className="w-full  rounded-lg overflow-hidden mt-8 relative">
      <div className="overflow-x-auto relative">
        <table className="w-full  text-left">
          <thead className="
        
          text-xs text-black font-sans font-bold uppercase">
            <tr className=" h-12   border-b border-greyDivide">
              <th className=" ">
              <span className="lg:hidden">Name</span>
              <span className="hidden lg:inline">Student Name</span>
              </th>
              <th className="sm:px-8 hidden  md:table-cell">Cohort</th>
              <th className="lg:px-10 px-6">Courses</th>
              <th className="px-6 hidden  lg:table-cell">Date Joined</th>
              <th className="px-6 hidden  lg:table-cell">Last Login</th>
              <th className=" ">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-greyDivide">
            {Students?.map((student) => (
              <tr 
                key={student.id}
                onClick={()=>navigate(`/student/${student.id}`,{replace:true})}
                className="bg-white hover:bg-gray-50  hover:cursor-pointer h-8"
              >
                <td className="  font-normal text-black text-xs font-sans  ">
                  {student.name}
                </td>
                <td className="px-8 hidden  md:table-cell font-normal text-black text-xs font-sans">
                  {student.cohort}
                </td>
                <td className="lg:px-10 px-2">
                  <div className="grid sm:grid-cols-2  gap-2">
                    {student.courses.map((course,index) => (
                      <div key={index} className="sm:bg-greyCourse sm:flex gap-x-2 w-auto rounded-md  py-[2px] ">
                        {couseIcon({type:course.name})}
                        <span className="font-medium text-black  text-xs font-sans">{course.name}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 hidden  lg:table-cell  font-normal text-black text-xs font-sans">
                  {formatDate({type:"date",dateString:student.joined_date})}
                </td>
                <td className="px-6  hidden  lg:table-cell font-normal text-black text-xs font-sans">
                  {formatDate({type:"dateTime",dateString:student.last_login.toString()})}
                </td>
                <td className="">
                  <div className="flex lg:justify-end">
                    <span 
                      className={`inline-block w-[14.4px] h-[14px] rounded-full ${
                        student.status === "Active"
                          ? 'bg-green-500' 
                          : 'bg-red-500'
                      }`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="relative"><Outlet/></div>
    </div>
  );
};

export default StudentTable;