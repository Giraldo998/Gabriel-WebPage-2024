export const DefaultLinks = ({path}) => {
   
	return (
		<div className="default" style={path === '/' ? {} : {display: 'none'}}>
			<div>
				<a href="#gallery" className="nav-link">
					Galería
				</a>
			</div>
			<div>
				<a href="#aboutMe" className="nav-link">
					Sobre mí
				</a>
			</div>
			<div>
				<a href="#" className="nav-link">
					Contacto
				</a>
			</div>
		</div>
	);
};
