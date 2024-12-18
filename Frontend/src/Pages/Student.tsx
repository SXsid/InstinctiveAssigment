import Profile from "../Components/Top/Profile"
import SearchComponent from "../Components/Top/Search"



function Student() {
  return (
    <div className="lg:ml-[268px] mt-6 mr-6">
      <div className="flex justify-between items-center">
      <SearchComponent/>
      <Profile name="Adeline H. Dancy"/>
      </div>
    </div>
  )
}

export default Student
