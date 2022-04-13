import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendPasswordResetEmail,
	updateEmail,
	updatePassword,
	signInWithEmailAndPassword,
	signOut,
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

	function signout() {
		return signOut(auth);
	}

	function resetpassword(email) {
		return sendPasswordResetEmail(auth, email);
	}

	function updateemail(email) {
		return updateEmail(currentUser, email);
	}

	function updatepassword(password) {
		return updatePassword(currentUser, password);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		signin,
		signout,
		resetpassword,
		updateemail,
		updatepassword,
	};

	return (
		<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
	);
}
