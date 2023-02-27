import React from 'react';
import { Toaster } from 'react-hot-toast';

export default function NotificationBanner() {
  // setting 
  return (
    <React.Fragment>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }} />
    </React.Fragment>
  )
}
