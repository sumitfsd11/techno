import React from 'react';
import Main from 'Main';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <React.Fragment>
      <ProSidebarProvider>
        <Main />
      </ProSidebarProvider>
    </React.Fragment>
  );
}

export default App;
