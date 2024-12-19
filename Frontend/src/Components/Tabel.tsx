
import { FaCalculator } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi"
import { RiEnglishInput } from "react-icons/ri";
const StudentTable = () => {
  const students = [
    {
      name: 'Anshuman Kashyap',
      cohort: 'AY 2024-25',
      courses: ['CBSE 9 Science', 'CBSE 9 Math',"CBSE 9 English"],
      dateJoined: '17. Nov. 2024',
      lastLogin: '17. Nov. 2024 4:16 PM',
      status: 'active'
    },
    {
      name: 'Bansi Dadhaniya',
      cohort: 'AY 2024-25',
      courses: ['CBSE 9 Science', 'CBSE 9 Math'],
      dateJoined: '17. Nov. 2024',
      lastLogin: '17. Nov. 2024 4:16 PM',
      status: 'active'
    },
    {
      name: 'Chandrika Valotia',
      cohort: 'AY 2024-25',
      courses: ['CBSE 9 Science', 'CBSE 9 Math'],
      dateJoined: '17. Nov. 2024',
      lastLogin: '17. Nov. 2024 4:16 PM',
      status: 'inactive'
    }
  ];

 const couseIcon=({type}:{type:string})=>{
    if(type.includes("Math")) return <FaCalculator/>
    else if(type.includes("Science")) return <GiMaterialsScience/>
    else return <RiEnglishInput/>
 }

  return (
    <div className="w-full  rounded-lg overflow-hidden mt-8">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="
        
          text-xs text-black font-sans font-bold uppercase">
            <tr className=" h-12   border-b border-greyDivide">
              <th className=" ">Student Name</th>
              <th className="px-8">Cohort</th>
              <th className="px-10 ">Courses</th>
              <th className="px-6 ">Date Joined</th>
              <th className="px-6 ">Last Login</th>
              <th className="px-6  text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-greyDivide">
            {students.map((student) => (
              <tr 
                key={student.name}
                className="bg-white hover:bg-gray-50 h-8"
              >
                <td className="  font-normal text-black text-xs font-sans  ">
                  {student.name}
                </td>
                <td className="px-8 font-normal text-black text-xs font-sans">
                  {student.cohort}
                </td>
                <td className="px-10 ">
                  <div className="grid grid-cols-2  gap-y-1">
                    {student.courses.map((course,index) => (
                      <div key={index} className="bg-greyCourse flex gap-x-2 w-[134px] rounded-md  py-[2px] px-3">
                        {couseIcon({type:course})}
                        <span className="font-medium text-black  text-xs font-sans">{course}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6  font-normal text-black text-xs font-sans">
                  {student.dateJoined}
                </td>
                <td className="px-6  font-normal text-black text-xs font-sans">
                  {student.lastLogin}
                </td>
                <td className="px-6  text-right">
                  <div className="flex justify-end">
                    <span 
                      className={`inline-block w-[14.4px] h-[14px] rounded-full ${
                        student.status === 'active' 
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
    </div>
  );
};

export default StudentTable;