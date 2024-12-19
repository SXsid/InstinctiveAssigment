import SearchSvg from "../../Svg/Top/Search";

const SearchComponent = () => {
  return (
    <div className="hidden items-center bg-white lg:flex p-4 h-12 w-[614px]  rounded-xl">
       <SearchSvg/>
      <input 
        type="text" 
        className="bg-transparent outline-none w-full pl-3 text-greytext" 
        placeholder="Search your course" 
      />
      
      
      
    </div>
  );
}

export default SearchComponent;