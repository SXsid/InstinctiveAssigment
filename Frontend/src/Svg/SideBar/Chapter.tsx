

function Chapter({color}:{color:string}) {
  return (
    <div>
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16.5V3C0 1.34315 1.34315 0 3 0H17C17.5523 0 18 0.44772 18 1V19C18 19.5523 17.5523 20 17 20H3.5C1.567 20 0 18.433 0 16.5ZM16 18V15H3.5C2.67157 15 2 15.6716 2 16.5C2 17.3284 2.67157 18 3.5 18H16ZM7 2H3C2.44772 2 2 2.44772 2 3V13.3368C2.45463 13.1208 2.9632 13 3.5 13H16V2H14V10L10.5 8L7 10V2Z" fill={color}/>
</svg>

    </div>
  )
}

export default Chapter
