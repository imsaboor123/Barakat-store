import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import './index.css';
import AuthProvider from './context/AuthProvider';
import FilterMenu from './context/FilterMenu';

// Render the application with AuthProvider wrapping RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FilterMenu>
        <RouterProvider router={router} />
      </FilterMenu>
    </AuthProvider>
  </React.StrictMode>
);
