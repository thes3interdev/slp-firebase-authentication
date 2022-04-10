import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UtilityScrollToTop = (props) => {
	let pathName = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathName]);

	return <>{props.children}</>;
};

export default UtilityScrollToTop;
