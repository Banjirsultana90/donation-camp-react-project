import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Error from './Pages/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Carddetails from './Components/Carddetails/Carddetails.jsx';
import Donation from './Pages/Donation/Donation.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/card/:id',
      element:<Carddetails></Carddetails>,
      loader:()=>fetch('data.json')
    },

    {
      path:'/Donations',
      element:<Donation></Donation>,
      loader:()=>fetch('/data.json')


    }
  ]

  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
