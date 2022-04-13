/** import functions needed from the sdk */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/** web firebase configuration */
const firebaseConfig = {
	apiKey: 'AIzaSyB78pD7AQx-aZH9gtbvAvXOBcYP0FuPndA',
	authDomain: 'slp-firebase-authentication.firebaseapp.com',
	projectId: 'slp-firebase-authentication',
	storageBucket: 'slp-firebase-authentication.appspot.com',
	messagingSenderId: '762000607193',
	appId: '1:762000607193:web:732cf7c9bb60f072ae3bc8',
};

/** initialize firebase */
const app = initializeApp(firebaseConfig);

/** initialize firebase authentication and get a reference to the service */
export const auth = getAuth(app);
