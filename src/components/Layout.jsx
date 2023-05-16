import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { AfterLoginHeader, NotificationBanner, UserAfterLoginHeader } from '.';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import 'animate.css';
import "animate.css/animate.min.css";
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';

export default function Layout() {
  const session = true;
  return (
    <React.Fragment>
      <GlobalThemeWrapper>
        <ThemeProvider>
          <Provider store={store}>
            <NotificationBanner />
            {
              session ? (<AfterLoginHeader />) : (<Outlet />)
            }
          </Provider>
        </ThemeProvider>
      </GlobalThemeWrapper>
    </React.Fragment>
  )
}

export const UserLayout = () => {
  const session = true;

  return (
    <React.Fragment>
      <GlobalThemeWrapper>
        <ThemeProvider>
          <Provider store={store}>
            <NotificationBanner />
            {
              session ? (<UserAfterLoginHeader />) : (<Outlet />)
            }
          </Provider>
        </ThemeProvider>
      </GlobalThemeWrapper>
    </React.Fragment>
  )
}

const GlobalThemeWrapper = styled.div`
font-family:normal;
`;