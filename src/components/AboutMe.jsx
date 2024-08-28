import {aboutData} from '../assets/data';
import {coverAbout} from '../assets/img';
import './css/aboutMe.css'

export const AboutMe = () => {
	return (
		<>
			{aboutData.map((data) => (
				<article class="about-card ">
					<a href="#" class="about ">
						<div class="about_cover">
							<div class="cover">
								<img src={data.picture} alt="" />
							</div>
						</div>
						<div class="description">
							<div class="title">
								<h3>{data.profile}</h3>
							</div>
							<p>{data.description}</p>
						</div>
					</a>
				</article>
			))}
		</>
	);
};
