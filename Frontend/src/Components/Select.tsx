import Dropdown from "../Svg/Dropdown";

interface SelectProp {
    width: string;
    Options: string[];
  }
  
  function Select({ width, Options }: SelectProp) {
    return (
      <div className="relative w-full">
        <select
          className={`w-${width} text-greySelect font-sans bg-selectBG rounded-md px-[15px] py-[7px] font-bold appearance-none pr-10 h-[38px] text-[16px]`}
        >
          {Options.map((value, index) => (
            <option
              className="bg-greybg font-sans text-greySelect hover:bg-greytext hover:text-white cursor-pointer"
              key={index}
              value={value}
            >
              {value}
            </option>
          ))}
        </select>
  
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
         <Dropdown/>
        </div>
      </div>
    );
  }
  
  export default Select;
  