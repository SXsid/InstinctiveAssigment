

import {Profile,SearchComponent,Notification,AddButton,Card,Select,StudentTable,Skeleton} from "../Components/index"


import { academicYears, cbseClasses } from "../Options"
import { useRetriveAllQuery } from "../Redux/StudenSlice"



function Student() {

  const {data:Students,error,isLoading,isError} = useRetriveAllQuery({})
  if(isError) console.error(error)
  return (
    <div className="lg:pl-[272px]  min-h-screen lg:pt-6 lg:pr-8 pt-3 px-2 bg-[#F6F8FA]  ">
            <div 
                id="topBar" 
                className=" items-center w-full h-[48px] justify-between gap-[65px]  hidden lg:flex">
                <SearchComponent/> 
                <Notification/>
            </div>
            <div className=" left-2  block lg:hidden">
              <Profile name="Adeline H. Dancy"/>
            </div>


            <Card>
            <div id="midPart"
             className="lg:flex   lg:justify-between ">
              <div className="lg:flex  hidden gap-3">
                <Select width="149" Options={academicYears}/>
                <Select width="117" Options={cbseClasses}/>
              </div>
              <AddButton/>
            </div>

           {!isLoading && !isError && <StudentTable Students={Students?.data}/>}
           {isLoading &&!isError && <Skeleton/>}
           {isError&&<div className="flex justify-center items-center text-red-600">
            <span className="font-extrabold">Error occured:</span>check the console</div>}
            </Card>
    </div>
  )
}

export default Student
