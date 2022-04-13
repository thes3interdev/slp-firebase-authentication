import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/ContextAuth';
import ScrollToTop from './utilities/UtilityScrollToTop';
import PageHome from './pages/PageHome';
import PageSignIn from './pages/PageSignIn';
import PageSignUp from './pages/PageSignUp';
import PageUpdateProfile from './pages/PageUpdateProfile';
import PrivateRoute from './components/RoutePrivate';

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<ScrollToTop>
					<div className="flex h-screen flex-col">
						<Routes>
							<Route
								path="/"
								element={
									<PrivateRoute>
										<PageHome />
									</PrivateRoute>
								}
							/>
							<Route path="/sign-in" element={<PageSignIn />} />
							<Route path="/sign-up" element={<PageSignUp />} />
							<Route path="/update-profile" element={<PageUpdateProfile />} />
						</Routes>
					</div>
				</ScrollToTop>
			</AuthProvider>
		</Router>
	);
};

export default App;
