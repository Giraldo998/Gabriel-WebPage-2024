import { profilePicture } from '../assets/img';
import {Footer, Navbar} from '../components/ui';
import './pages.css';

export const Artist = () => {
	return (
		<>
			<Navbar />

			<div className="body_page">
				<section className="content">
					<h1 className='title_page'>Artista</h1>
					<article className="first_content">
						<p className='pharap'>
							Inicié mi formación instrumental de la mano del maestro Argiro
							Arias Pérez en el año 1998 en la escuela del municipio de
							Valparaíso, Antioquia. En el año 2003 hice una breve pausa y
							retomé como eufonista en el año 2006 en la escuela de música
							del municipio de Sabaneta, participando como eufonista de la
							Banda Sinfónica Juan David Castaño Arango de esta misma
							escuela bajo la batuta del maestro Gegdyrzon Osorio Hidalgo.
						</p>
						<img src={profilePicture} alt="" />
						<p>
							Durante ese tiempo, tuve la oportunidad de participar en
							eventos internacionales en Valencia, España, y Buenos Aires,
							Argentina, así como en diferentes certámenes a nivel nacional,
							como Paipa, Boyacá, Anapoima, Cundinamarca, La Vega,
							Cundinamarca y Tocancipá, Cundinamarca. Sin embargo, fue solo
							hasta el año 2019, después de haber recibido diversos talleres
							organizados por el Plan Departamental de Música de Antioquia,
							que inicié mis estudios formales.
						</p>
					</article>
					<article className='second-content'>
						<p>
							Paralelamente, realicé mis estudios de pregrado en
							licenciatura en música en la Universidad de Antioquia y me
							convertí en maestro de eufonio en la Fundación Universitaria
							Bellas Artes. Mi interés por conocer más acerca del eufonio me
							llevó a participar en diferentes festivales nacionales e
							internacionales, algunos de los cuales incluyen: <br />
							<i>Eufolandia en bogotá (Colombia)</i>
							,{' '}
							<i>
								el Festival Internacional de Eufonios y Bambardinos en
								Funza (Colombia)
							</i>
							,{' '}
							<i>
								clases magistrales con el maestro Mr. Steven Mead
								organizadas por la Pontificia Universidad Católica del Perú
								en Lima (Perú)
							</i>
							, y el{' '}
							<i>
								Campamento Departamental de Eufonios y Tubas en Valparaíso,
								Antioquia (Colombia)
							</i>
							.
						</p>
					</article>
				</section>
			</div>
			<Footer />
		</>
	);
};
