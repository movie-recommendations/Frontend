import { FC, JSXElementConstructor, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'src/services/redux/slices/user/user';
import { useAppSelector } from 'src/services/typeHooks';
import { Loader } from './Loader/Loader';

interface IProtectedRoute {
	children: ReactElement<string | JSXElementConstructor<unknown>> | null;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
	const user = useAppSelector(selectUser);
	return user.token ? (
		children
	) : (
		<>
			<Loader />
			<Navigate to="/" />
		</>
	);
};

export default ProtectedRoute;
