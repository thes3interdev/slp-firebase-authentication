import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utilities/UtilityScrollToTop';
import PageHome from './pages/PageHome';
import PageSignIn from './pages/PageSignIn';
import PageSignUp from './pages/PageSignUp';

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<div className="flex h-screen flex-col">
					<Routes>
						<Route path="/" element={<PageHome />} />
						<Route path="/signin" element={<PageSignIn />} />
						<Route path="/signup" element={<PageSignUp />} />
					</Routes>
				</div>
			</ScrollToTop>
		</Router>
	);
};

export default App;
