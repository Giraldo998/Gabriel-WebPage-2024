import {Routes, Route} from 'react-router-dom';
import {Artist, Manager, Teacher, Home} from '../pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="artista" element={<Artist />} />
			<Route path="docente" element={<Teacher />} />
			<Route path="gestor" element={<Manager />} />

			<Route path="/" element={<Home />} />
		</Routes>
	);
};
