import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { logo } from '../../assets/img';
import './footer.css'

export const Footer = () => {
	return (
		<footer>
         <div className="footer-container">
				<div className="copy">
					<p>Creado por Sebas</p>
					<p>
						&copy;
						<span className='copy-date'>
							{ (new Date().getFullYear()) }
						</span>
						Todos los derechos reservados 
					</p>
				</div>
				<div className="footer-logo">
					<NavLink to={'/'}>
						<img src={logo} alt="logotipo GP" />
					</NavLink>
				</div>
				<div id="contact" className="contact">
					<div className="social-links">
						<a
							href="https://www.instagram.com/gabriel.bombardino/"
							target="_blank"
							className="contact-link"
						>
							<FontAwesomeIcon icon={faInstagram} style={{fontSize:'1.8em'}} />
							{' '}Instagram
                  </a>
						<a
							href="https://www.facebook.com/gabriel.pena.94214"
							target="_blank"
							className="contact-link"
						>
							<FontAwesomeIcon icon={faSquareFacebook} style={{fontSize:'1.8em'}} />
							{' '}Facebook
                  </a>
					</div>
				</div>
			</div>
      </footer>
	);
};