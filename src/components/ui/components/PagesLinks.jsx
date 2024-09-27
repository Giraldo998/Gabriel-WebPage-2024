import { NavLink } from 'react-router-dom';

export const PagesLinks = ({path}) => {
	 
	return (
		<div className="pages" style={path !== '/' ? {display: 'flex'} : {}}>
			<div style={path === '/docente' ? {display: 'none'} : {}}>
				<NavLink className="nav-link" to={'/docente'}>
					Docente
				</NavLink>
			</div>
			<div style={path === '/gestor' ? {display: 'none'} : {}}>
				<NavLink className="nav-link" to={'/gestor'}>
					Gestor
				</NavLink>
			</div>
			<div style={path === '/artista' ? {display: 'none'} : {}}>
				<NavLink className="nav-link" to={'/artista'}>
					Artísta
				</NavLink>
			</div>
			<div>
				<a href="#" className="nav-link">
					Contacto
				</a>
			</div>
		</div>
	);
};
