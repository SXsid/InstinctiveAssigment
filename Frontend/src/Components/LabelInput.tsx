
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';
interface LabelInputProps<T extends FieldValues> {
    label: string
    register: UseFormRegister<T>;
    name: Path<T>; 
    errors: FieldErrors<T>;
    placeholder?:string,
    type:string
  }
  
function LabelInput<T extends FieldValues>({ label,
    type,
    register,
    name,
    errors,placeholder}:LabelInputProps<T>) {
  return (
    <div>
      
      <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              {...register(name)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder={placeholder}
            />
            {errors[name] && (
        <p className="text-red-500 text-xs"> {(errors[name] as any)?.message || 'This field is required'}</p>
      )}
          </div>
    </div>
  )
}

export default LabelInput
