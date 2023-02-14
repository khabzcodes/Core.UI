import { Navigate } from 'react-router-dom';

export interface ProtectedRouteProps {
  isAuthenticated: boolean;
  outlet: JSX.Element;
}

function ProtectedRoute({ isAuthenticated, outlet }: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  }
  return <Navigate to={{ pathname: '/login' }} />;
}

export default ProtectedRoute;
