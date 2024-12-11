import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/auth.context';
import { ClientContext } from './context/Client.context';
const App = () => {
  return (
    <>
    <AuthProvider>
      <ClientContext>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home/*" element={
              <Home />
            } />
          </Routes>
        </Router>
      </ClientContext>
    </AuthProvider>
    </>
  );
};

export default App;
