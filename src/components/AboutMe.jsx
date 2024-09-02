import {aboutData} from '../assets/data';
import {NavLink} from 'react-router-dom';
import './css/aboutMe.css';

export const AboutMe = () => {
	return (
		<>
			{aboutData.map((data) => (
				<article className="about-card" key={data.id}>
					<NavLink
						className="about_link"
						to={
							(data.id === 1)
								? '/docente'
								: (data.id === 2)
									? '/artista'
									: (data.id === 3)
										? '/gestor'
										: '/'
						}
					>
						<div className="about">
							<div className="about_cover">
								<div className="cover">
									<img src={data.picture} alt="image card" />
								</div>
							</div>
							<div className="description">
								<div className="title">
									<h3>{data.profile}</h3>
								</div>
								<p>{data.description}</p>
							</div>
						</div>
					</NavLink>
				</article>
			))}
		</>
	);
};
