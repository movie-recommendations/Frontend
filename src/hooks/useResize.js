import { useState, useEffect } from 'react';
const SCREENBREAKPOINT = 1320;

export const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		width,
		isBreakpoint: width > SCREENBREAKPOINT,
	};
};
