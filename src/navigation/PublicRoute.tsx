import { Navigate } from 'react-router-dom';

export interface PublicRouteProps {
  isAuthenticated: boolean;
  outlet: JSX.Element;
}

function PublicRoute({ isAuthenticated, outlet }: PublicRouteProps) {
  if (isAuthenticated) {
    return <Navigate to={{ pathname: '/' }} />;
  }

  return outlet;
}

export default PublicRoute;
