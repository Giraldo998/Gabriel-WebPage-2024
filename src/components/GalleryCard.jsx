import React from 'react';
import {galleryData} from '../assets/data';
import './css/galleryCard.css';

export const GalleryCard = () => {
	return (
		<>
			{galleryData.map((item) => (
				<div className="gallery-card" key={item.id}>
					<img src={item.backgroundCard} alt="" />
					<a href={item.albumUrl} className="hide" target='_blank'>
						{item.galleryName}
					</a>
				</div>
			))}
		</>
	);
};
