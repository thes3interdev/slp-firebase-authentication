import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/ContextAuth';

const RouteProtected = ({ children }) => {
	const { currentUser } = useAuth();

	if (!currentUser) {
		return <Navigate to="/sign-in" />;
	}

	return children;
};

export default RouteProtected;
