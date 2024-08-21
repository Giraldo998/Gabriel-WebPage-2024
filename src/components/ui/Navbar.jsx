import { logo } from '../../assets/img';
import './navbar.css';

export const Navbar = () => {
	return (
		<nav >
			<div className="navbar">
				<div className="logo">
         	   <a href="#" style={{display:'flex', alignItems:'center'}}>
					   <img 
         	         src={logo} 
         	         alt="logotipo GP" 
         	         className="gp-logo" 
         	         style={{width:'40px', height:'40px'}}
         	      />
         	   </a>
				</div>
         	<div className="links-container">
					<div className="navigation">
						<div >
							<a href="#" className="nav-link">
								Galería
							</a>
						</div>
						<div >
							<a href="#" className="nav-link">
								Sobre mí
							</a>
						</div>
						<div >
							<a href="#" className="nav-link">
								Contacto
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
