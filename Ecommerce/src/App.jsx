import {createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import First from "../pages/First";
import SingleProduct from "../pages/SingleProduct";




function App() {

const router= createBrowserRouter([
{
  path:'/',
  element:<Home />,
    children: [
      {
        index:true,
        element:<First />
      },
      {
        path:'',
        element:<SingleProduct/>
      }

    ]
}
]);





  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App