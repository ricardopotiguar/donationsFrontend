import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        const decodedToken = jwtDecode(token);

        console.log('decodedToken.exp', decodedToken.exp)
        console.log('Date.now()', Date.now())

        // Verifica se o token está expirado
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            return <Navigate to="/login" />;
        }
    } catch (error) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />;
    }

    return children;
};










export default PrivateRoute;
