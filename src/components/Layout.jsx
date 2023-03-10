import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AfterLoginHeader, NotificationBanner, UserAfterLoginHeader } from '.';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SidebarC from './utilsComponents/Sidebar';
import { ThemeProvider } from "@material-tailwind/react";
import 'animate.css';
import "animate.css/animate.min.css";
// import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

// const { quill, quillRef } = useQuill();

// console.log(quill);    // undefined > Quill Object
// console.log(quillRef);
// <div ref={quillRef}/>

export default function Layout() {
  const session = true;
  return (
    <React.Fragment>
      <ThemeProvider>
        <Provider store={store}>
          <NotificationBanner />
          {
            session ? (<AfterLoginHeader />) : (<Outlet />)
          }
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export const UserLayout = () => {
  const session = true;

  return (
    <React.Fragment>
      <ThemeProvider>
        <Provider store={store}>
          <NotificationBanner />
          {
            session ? (<UserAfterLoginHeader />) : (<Outlet />)
          }
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}
