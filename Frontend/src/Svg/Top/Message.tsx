
import Ping from "./Ping"
function Message({isTrue}:{isTrue:boolean}) {
  return (
    <div className="relative hover:cursor-pointer">
       {isTrue&& <div className="absolute -top-1 -right-1"><Ping/></div>}

      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.45455 16L0 19.5V1C0 0.44772 0.44772 0 1 0H19C19.5523 0 20 0.44772 20 1V15C20 15.5523 19.5523 16 19 16H4.45455ZM3.76282 14H18V2H2V15.3851L3.76282 14ZM9 7H11V9H9V7ZM5 7H7V9H5V7ZM13 7H15V9H13V7Z" fill="#808281"/>
</svg>

    </div>
  )
}

export default Message
