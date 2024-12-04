import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('donations-token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        const decodedToken = jwtDecode(token);

        // Verifica se o token está expirado
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('donations-token');
            return <Navigate to="/login" />;
        }
    } catch (error) {
        localStorage.removeItem('donations-token');
        return <Navigate to="/login" />;
    }

    return children;
};










export default PrivateRoute;
