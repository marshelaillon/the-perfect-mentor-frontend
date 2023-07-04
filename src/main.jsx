import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import {
  SignUp,
  LogIn,
  UsersView,
  MyProfile,
  PrivateRoutes,
  Home,
} from './components/index.jsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <LogIn /> },
  {
    path: '/app',
    element: <PrivateRoutes />,
    children: [
      { path: 'users', element: <UsersView /> },
      { path: 'profile', element: <MyProfile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
