

import {Profile,SearchComponent,Notification,AddButton,Card,Select} from "../Components/index"
import StudentTable from "../Components/Tabel"

import { academicYears, cbseClasses } from "../Options"



function Student() {
  return (
    <div className="lg:ml-[272px] mt-6 mr-8 ">
            <div 
                id="topBar" 
                className=" items-center w-full h-[48px] justify-between gap-[65px]  hidden lg:flex">
                <SearchComponent/> 
                <Notification/>
            </div>
            <div className=" left-2 fixed block lg:hidden">
              <Profile name="Adeline H. Dancy"/>
            </div>


            <Card>
            <div id="midPart"
             className="flex justify-between ">
              <div className="flex gap-3">
                <Select width="149" Options={academicYears}/>
                <Select width="117" Options={cbseClasses}/>
              </div>
              <AddButton/>
            </div>

            <div>
              <StudentTable/>
            </div>
            </Card>
    </div>
  )
}

export default Student
