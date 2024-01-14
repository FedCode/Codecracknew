import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutus from './pages/About/About';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Blog from './pages/Blog/Blog';
import Blogdetails from './pages/Blog/Blogdetails';
import Casestudy from './pages/Casestudy/Casestudy';
import Service from './pages/Service/Service';
import Devops from './pages/Devops/Devops';
import Allservices from './pages/Allservices/Allservices'

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "About",
    element: <Aboutus></Aboutus>,
  },
  {
    path: "Work",
    element: <Work></Work>,
  },
  {
    path: "Contact",
    element: <Contact></Contact>,
  },
  {
    path: "Blog",
    element: <Blog></Blog>,
  },
  {
    path: "Blogdetails",
    element: <Blogdetails></Blogdetails>,
  },
  {
    path: "Casestudy",
    element: <Casestudy></Casestudy>,
  },
  {
    path: "Service",
    element: <Service></Service>,
  },
  {
    path: "Devops",
    element: <Devops></Devops>,
  },
  {
    path:"Allservices",
    element:<Allservices></Allservices>
  }
])


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
