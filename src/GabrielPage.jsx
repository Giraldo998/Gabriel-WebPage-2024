import { banner, profilePicture } from './assets/img';
import { GalleryCard } from './components';
import {Navbar} from './components/ui';

export const GabrielPage = () =>{
	return (
		<>
			<header>
				<Navbar />
				
				{/* imagen principal - banner  */}
				<div className="banner-container">
					<div className="banner-background">
						<img src={banner} alt="" />
					</div>
					<div className="profile-picture">
						<img src={profilePicture} alt="" />
					</div>
					
				</div>
			</header>

			<main>
				<section className="gallery-container">
					<div className="gallery-layout">
						<GalleryCard/>
					</div>
				</section>

				<section className="about-container">
				{/* sobre su carrera  Docente, Gestor investigador, Artista */}
				</section>
			</main>

			<footer>{/* contacto */}</footer>
		</>
	);
}
