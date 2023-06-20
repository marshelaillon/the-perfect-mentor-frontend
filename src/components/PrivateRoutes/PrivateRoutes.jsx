import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoutes() {
  const { accessToken } = useSelector(state => state.auth);

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
}
