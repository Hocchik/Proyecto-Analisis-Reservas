import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, DataClientes, logoutRequest } from '../api/auth';
import Cookies from 'js-cookie'; 

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext); 
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);

    // register
    const signup = async (users) => {
        try {
            const res = await registerRequest(users);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    // login
    const signin = async (users) => {
        try {
            const res = await loginRequest(users);
            setUser(res.data); // Cambié aquí a res.data para obtener la información del usuario
            setIsAuthenticated(true);
            // Esperar un tiempo antes de cargar la información del cliente
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Esperar 1 segundo
            await DataClient(users); // Llamar a DataClient
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    // logout
    const logout = () => {
        Cookies.remove('token');
        logoutRequest();
        setIsAuthenticated(false);
        setUser(null);
        setUserData([]); // Limpiar userData al cerrar sesión
    };

    const DataClient = async (users) => {
        
        try {
            const res = await DataClientes(users);
            console.log(res);
            setUserData(res.data);
        } catch (error) {
            console.log(error);
            setErrors([error.message || "Error al cargar datos del cliente."]);
        }
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                } 

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
                console.log(error);
            }
        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{
            signup, signin, logout, loading, user, isAuthenticated, errors,
            userData, DataClient
        }}>
            {children}
        </AuthContext.Provider>
    );
};