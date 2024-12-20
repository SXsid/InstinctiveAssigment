import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorComp, SideBar, WaitingComp } from "./Components"
import { Provider } from "react-redux"
import {Student,Add,Update,Show} from "./Pages/index"
import { StudentStore } from "./Redux/Store/Store"

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
          element:<Student/>,
          children:[
            {
              path:"/student/:id",
              element:<Show/>
            }
          ]
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
        },
        {
          path:"/add",
          element:<Add/>
          
        },
        {
          path:"/update",
          element:<Update/>
          
        },
      ]
      
    },
    
    
  ])
 return(
  <Provider store={StudentStore}>
  <RouterProvider router={routes}></RouterProvider>
  </Provider>
 )
}

export default App
