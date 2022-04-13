import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function signin(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = { currentUser, signup, signin };

	return (
		<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
	);
}
