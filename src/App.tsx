import AuthProvider from './hooks/AuthProvider';
import AppRoutes from './navigation/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
