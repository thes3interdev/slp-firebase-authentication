import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthenticationContext = React.createContext();

export function useAuth() {
	return useContext(AuthenticationContext);
}

export function AuthenticationProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signUp(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = { currentUser, signUp };

	return (
		<AuthenticationContext.Provider value={value}>
			{!loading && children}
		</AuthenticationContext.Provider>
	);
}
