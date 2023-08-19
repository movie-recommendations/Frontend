import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import {
	getPage,
	getScreenWidth,
} from 'src/services/redux/slices/window_resize/window_resize';

export const WindowResize = () => {
	const dispatch = useAppDispatch();
	const sizeWindow = useAppSelector((state) => state.windowResize.screenWidth);

	const handleResize = useCallback(() => {
		const windowWidth = window.innerWidth;
		dispatch(getScreenWidth({ screenWidth: windowWidth }));
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (sizeWindow >= 1280) {
			const page = 12;
			dispatch(getPage({ page }));
		} else if (sizeWindow <= 1280 && sizeWindow > 800) {
			const page = 9;
			dispatch(getPage({ page }));
		} else if (sizeWindow < 800) {
			const page = 8;
			dispatch(getPage({ page }));
		}
	}, [sizeWindow]);

	return <></>;
};
