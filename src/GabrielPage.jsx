import { banner, profilePicture } from './assets/img';
import { AboutMe, GalleryCard } from './components';
import { Navbar } from './components/ui';

export const GabrielPage = () =>{
	return (
		<>
			<header>
				<Navbar />
				
				<div className="banner-container">
					<div className="banner-background">
						<img src={banner} alt="euphonium" />
					</div>
					<div className="profile-picture">
						<img src={profilePicture} alt="" />
					</div>
					
				</div>
			</header>

			<main>
				<section className="gallery-container" id='gallery'>
					<div className="description">
					<h2>Galería</h2>
					<p>
						Te invito a que conozcas algunos de los lugares que he visitado, los
						trabajos que he hecho y lo mucho que he disfrutado haciendo lo que más
						amo; música.
					</p>
					</div>
					<div className="gallery-layout">
						<GalleryCard/>
					</div>
				</section>

				<section className="about-container" id='aboutMe'>
					<div className="about-title">
						<h2>Sobre mí</h2>
					</div>
					<div className="about-layout">
						<AboutMe/>
					</div>
				</section>
			</main>

			<footer>{/* contacto */}</footer>
		</>
	);
}
