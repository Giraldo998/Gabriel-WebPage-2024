import {Footer, Navbar} from '../components/ui';
import './pages.css';

export const Manager = () => {
	return (
		<>
			<Navbar />
			<main className="body_page">
				<section className="content">
					<h1 className='title_page'>Gestor investigador</h1>
					<p>
						Dentro de mi carrera no he encontrado mayor satisfacción que
						la de poder ayudar a la consolidación de programas, proyectos
						y festivales que propendan por el aumento de las posibilidades
						de materiales y técnicas para el aprendizaje musical, aunados
						a la formación de un público que además de la música entiende
						los esfuerzos que conlleva la realización de un concierto o de
						un festival.
					</p>
					<p>
						He colaborado con fundaciones como lo son la fundación oro
						molido y la fundación carnaval para la planeación y desarrollo
						de programas formativos, con la fundación carnaval en las
						comunas de Medellín y con la fundación oro molido en la zona
						rural del municipio de Montebello. De la mano de la provincia
						administrativa y de planificación cartama desarrollamos el
						encuentro provincial de eufonios y tubas que se realizó en el
						municipio de Caramanta. Generando sinergia entre la empresa
						privada y el sector público se estructuró y llevó a cabo el
						festival "Canto por Montebello" que fue un festival de la
						canción cuyo propósito principal era encontrar los talentos
						que en esta área viviesen en el municipio de Montebello.
					</p>
					<p>
						En alianza con el ministerio nacional de cultura y la
						provincia de administración y planificación Cartama, aplicamos
						diferentes herramientas para la construcción social del Plan
						estratégico provincial de música de la provincia de la
						provincia del Cartama. En un esfuerzo público privado por
						resaltar el trabajo de la escuela de formación musical y
						artística "Javier Vélez Vélez" del municipio de Valparaíso, se
						planificó y desarrolló el Campamento departamental de eufonios
						y tubas, en el cual nos acompañaron como docentes
						internacionales Patricio Cosentino de Argentina y Juan Esteban
						Arenas, quién es un valparaiseño, radicado como estudiante y
						docente en Alemania.
					</p>
				</section>
			</main>
			<Footer />
		</>
	);
};
