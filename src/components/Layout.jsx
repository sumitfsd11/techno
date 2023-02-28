import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AfterLoginHeader, NotificationBanner } from '.';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SidebarC from './utilsComponents/Sidebar';
export default function Layout() {
  const session = true;

  return (
    <React.Fragment>
      <Provider store={store}>
        <NotificationBanner />
        {
          session ? (<AfterLoginHeader />) : (<Outlet />)
        }
        <button onClick={() => toast.success("hello world !")}>hello world </button>
      </Provider>
    </React.Fragment>
  )
}
