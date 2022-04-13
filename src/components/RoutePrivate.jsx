import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/ContextAuth';

const RoutePrivate = ({ children }) => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="sign-in" />;
	}

	return children;
};

export default RoutePrivate;
