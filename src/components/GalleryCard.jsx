import React from 'react'
import { galleryData } from '../assets/gallery/galleryData'
import './css/galleryCard.css'

export const GalleryCard = () => {

  return (
    <>
      {galleryData.map(item => (

        <div className='gallery-card'>
          <img src={item.backgroundCard} alt="" />
          <a href={item.albumUrl} className='hide'>{item.galleryName}</a>
        </div>
      ))}
    </>
  )
}
