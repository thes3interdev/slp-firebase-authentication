import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticationProvider } from './contexts/ContextAuth';
import ScrollToTop from './utilities/UtilityScrollToTop';
import PageHome from './pages/PageHome';
import PageSignIn from './pages/PageSignIn';
import PageSignUp from './pages/PageSignUp';

const App = () => {
	return (
		<Router>
			<AuthenticationProvider>
				<ScrollToTop>
					<div className="flex h-screen flex-col">
						<Routes>
							<Route path="/" element={<PageHome />} />
							<Route path="/signin" element={<PageSignIn />} />
							<Route path="/signup" element={<PageSignUp />} />
						</Routes>
					</div>
				</ScrollToTop>
			</AuthenticationProvider>
		</Router>
	);
};

export default App;
