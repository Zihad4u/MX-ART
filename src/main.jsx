import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './NavBar/Navbar.jsx';
import Root from './Root/Root.jsx';
import AuthContext from './Components/AuthContext.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import Home from './Home/Home.jsx';
import CardDetails from './CardDetails/CardDetails.jsx';
import PrivateRoute from './PrivateRoute.jsx/PrivateRoute.jsx';
import AddCraft from './addCraftItem/AddCraft.jsx';
import MyAddList from './addCraftItem/MyAddList.jsx';
import UpdateData from './UpdateCard/UpdateData.jsx';
import AllCraftItem from './AllCraftItem/AllCraftItem.jsx';
import AllCraftDetails from './AllCraftItem/AllCraftDetails.jsx';
import CategoriesCard from './Art & Craft Categories/CategoriesCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-blond-one.vercel.app/details/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateData /></PrivateRoute>,
      },
      {
        path: "/allArtCraft",
        element: <AllCraftItem />
      },
      {
        path: "/categoriesCard/:id",
        element: <CategoriesCard />,
        loader: () => fetch('https://assignment-10-server-blond-one.vercel.app/allData')
      },
      {
        path: "/allArtCraftDetails/:id",
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-blond-one.vercel.app/allData/${params.id}`)
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyAddList /></PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-blond-one.vercel.app/getUserItem')
      },
      {
        path: "/addItem",
        element: <PrivateRoute><AddCraft /></PrivateRoute>
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext><RouterProvider router={router} /> <ToastContainer /> </AuthContext>
  </React.StrictMode>,
)
