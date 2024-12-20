import { StudentProp } from "../Types/type";
import { formatDate } from "./Tabel";




interface StudentCardProps {
    student: StudentProp;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
}
const ShowCard = ({ student, onClose, onEdit, onDelete }: StudentCardProps) => {

    return (
        <div className=" justify-center items-center flex">
            <div className="w-full max-w-md bg-white  h-full rounded-lg shadow-lg relative p-6">
           
            <button 
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
                <span className="text-xl font-medium">×</span>
            </button>

            
            <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{student.name}</h2>
                <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
                    student.status ==="Active"
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                }`}>
                    {student.status==="Active" ? 'Active' : 'Inactive'}
                </span>
            </div>

          
            <div className="space-y-3 text-gray-600">
                <div>
                    <p className="text-sm font-medium text-gray-500">Cohort</p>
                    <p>{student.cohort}</p>
                </div>

                <div>
                    <p className="text-sm font-medium text-gray-500">Courses</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {student.courses?.map((course, idx) => (
                            <span 
                                key={idx} 
                                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                            >
                                {course.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Joined Date</p>
                        <p>{formatDate({type:"date",dateString:student.joined_date})}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Last Login</p>
                        <p>{formatDate({type:"dateTime",dateString:student.last_login})}</p>
                    </div>
                </div>
            </div>

            
            <div className="flex gap-3 mt-6">
                <button
                    onClick={() => onEdit()}
                    className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete()}
                    className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Delete
                </button>
            </div>
        </div>
        </div>
    );
};

export default ShowCard;