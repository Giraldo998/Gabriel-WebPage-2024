import { banner, profilePicture } from '../assets/img';
import { AboutMe, GalleryCard } from '../components';
import { Footer, Navbar } from '../components/ui';

export const Home = () => {

	return (
		<>
			<header>
				<Navbar/>
				<section className="banner-container">
					<div className="banner-background">
						<img src={ banner } alt="banner_euphonium" />
						<div className="greeting-container">
							<p>Hola, soy <br />
								Gabriel Peña
							</p>
						</div>
					</div>
					<div className="profile-picture">
						<img src={profilePicture} alt="profile_picture_ilustrated" />
					</div>
				</section>
			</header>

			<main>
				<section className="about-container" id="aboutMe">
					<div className="about-description">
						<h2>Sobre mí</h2>
						<p>Soy un profesional multifacético: docente con experiencia, artista con presentaciones internacionales y gestor investigador en proyectos musicales a nivel nacional. Descubre más sobre mi trayectoria</p>
					</div>
					<div className="about-layout">
						<AboutMe />
					</div>
				</section>
				<section className="gallery-container" id="gallery">
					<div className="gallery-description">
						<h2>Galería</h2>
						<p>
							Te invito a que conozcas algunos de los lugares que he
							visitado, los trabajos que he hecho y lo mucho que he
							disfrutado haciendo lo que más amo; música.
						</p>
					</div>
					<div className="gallery-layout">
						<GalleryCard />
					</div>
				</section>
			</main>

			<Footer/>
		</>
	);
};
