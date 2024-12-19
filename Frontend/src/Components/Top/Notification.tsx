import { Help, Message, TopNotification, TopSettings } from "../../Svg"
import Profile from "./Profile"


function Notification() {
  return (
    <div className=" flex justify-between items-center gap-10 w-[473px] ">
        <Help color="#808281"/>
        <Message isTrue={true}/>
        <TopSettings/>
        <TopNotification isTrue={true}/>
        <Profile name="Adeline H. Dancy"/>
    </div>
  )
}

export default Notification
