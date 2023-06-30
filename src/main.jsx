import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import CandidateSearch from './Components/CandidateSearch/CandidateSearch';
import UserRegistration from './Components/UserRegistration/UserRegistration';
import Signup from './Components/UserRegistration/Signup';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';





const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main/>,
    children:[
      {
        path: "/",
        element:  <Home/>
      },
      {
        path: "/userregistration",
        element:  <UserRegistration/>
      },
    
      {
        path:"/candidateSearch",
        element:<PrivateRoute><CandidateSearch/></PrivateRoute>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
