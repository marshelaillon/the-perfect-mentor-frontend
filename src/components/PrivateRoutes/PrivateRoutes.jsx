import { Navigate, Outlet } from 'react-router-dom';
import { useGetMeQuery } from '../../services/thePerfectMentorApi';
import { useEffect } from 'react';

export default function PrivateRoutes() {
  const { isSuccess } = useGetMeQuery();

  useEffect(() => {}, [isSuccess]);

  return isSuccess ? <Outlet /> : <Navigate to="/login" />;
}
