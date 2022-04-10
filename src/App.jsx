import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utilities/UtilityScrollToTop';
import PageHome from './pages/PageHome';

const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<div className="flex h-screen flex-col">
					<Routes>
						<Route path="/" element={<PageHome />} />
					</Routes>
				</div>
			</ScrollToTop>
		</Router>
	);
};

export default App;
