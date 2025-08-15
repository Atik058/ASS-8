import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import Navbar from '../Header/Navbar';
import Root from '../Root/Root';
import Home from '../Home/Home';
import DoctorProfileDetails from '../Pages/DoctorProfileDetails';
import ErrorPage from '../Pages/ErrorPage';
import MyBookings from '../Pages/MyBookings';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          const res = await fetch('/doctors.json');
          if (!res.ok) throw new Error('Failed to load doctors');
          return await res.json(); 
        },
        // errorElement: <ErrorPage></ErrorPage>,
      },
      {

        path: "/DoctorProfileDetails/:id",
        Component: DoctorProfileDetails,
        loader: () => fetch('./doctors.json'),

      },
      {

        path: "/my-bookings",
        Component: MyBookings,
        loader: async () => {
          const res = await fetch('/doctors.json');
          if (!res.ok) throw new Error('Failed to load doctors');
          return await res.json(); 
        },

      },
    ]
  },
]);