
import { UseFormRegister, FieldValues, FieldErrors, Path } from 'react-hook-form';

interface LabelSelectProps<T extends FieldValues> {
  label: string;
  options: string[];
  register: UseFormRegister<T>;
  name: Path<T>; 
  errors: FieldErrors<T>;
}

function LabelSelect<T extends FieldValues>({
  label,
  options,
  register,
  name,
  errors,
}: LabelSelectProps<T>) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        {...register(name)} 
        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
      >
        <option value="">Select {label}</option>
        {options.map((value) => (
            <option key={value} value={value}>
            {value}
            </option>
        ))}
      </select>
  
      {errors[name] && (
        <p className="text-red-500 text-xs"> {(errors[name] as any)?.message || 'This field is required'}</p>
      )}
    </div>
  );
}

export default LabelSelect;
