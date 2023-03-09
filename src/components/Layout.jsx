import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AfterLoginHeader, NotificationBanner, UserAfterLoginHeader } from '.';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SidebarC from './utilsComponents/Sidebar';
import { ThemeProvider } from "@material-tailwind/react";
import 'animate.css';


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
