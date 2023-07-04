import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useGetMeQuery } from '../../services/thePerfectMentorApi';
import { useEffect } from 'react';

export default function PrivateRoutes() {
  const { isSuccess } = useGetMeQuery();
  const location = useLocation();

  useEffect(() => {}, [isSuccess]);

  if (location.pathname === '/') {
    // Si estamos en la ruta /app/profile, mostramos el contenido
    return isSuccess ? <Outlet /> : <Navigate to="/app/users" />;
  } else {
    return isSuccess ? <Outlet /> : <Navigate to={`${location.pathname}`} />;
  }
}
