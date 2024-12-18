import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorComp, SideBar, WaitingComp } from "./Components"
import Student from "./Pages/Student"


function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<SideBar/>,
      errorElement:<ErrorComp/>,
      children:[
        {
          index:true,
          element:<WaitingComp/>
        },{
          path:"/student",
          element:<Student/>
        },{
          path:"/chapter",
          element:<WaitingComp/>
        },{
          path:"/help",
          element:<WaitingComp/>
        },{
          path:"/reports",
          element:<WaitingComp/>
        },{
          path:"/settings",
          element:<WaitingComp/>
        }
      ]
    }
  ])
 return(
  <>
  <RouterProvider router={routes}></RouterProvider>
  </>
 )
}

export default App
