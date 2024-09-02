import {NavLink, useLocation} from 'react-router-dom';
import {logo} from '../../assets/img';
import { DefaultLinks, PagesLinks } from './components';
import './navbar.css';

export const Navbar = () => {
	
	const location = useLocation();
	const path = location.pathname;

	return (
		<nav>
			<div className="nav-container">
				<div className="navbar">
					<div className="logo">
						<NavLink
							to={'/'}
							style={{display: 'flex', alignItems: 'center'}}
						>
							<img
								src={logo}
								alt="logotipo GP"
								className="gp-logo"
								style={{width: '40px', height: '40px'}}
							/>
						</NavLink>
					</div>
					<div className="links-container">
						<div className="navigation">
							<DefaultLinks path={path}/>
							<PagesLinks path={path}/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
