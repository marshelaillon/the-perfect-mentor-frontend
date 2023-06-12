import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { SignUp, LogIn, UsersView, MyProfile } from './components/index.jsx';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <LogIn /> },
  { path: '/users', element: <UsersView /> },
  { path: '/profile', element: <MyProfile /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
