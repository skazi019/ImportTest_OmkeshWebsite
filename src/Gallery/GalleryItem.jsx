import React from 'react'

export default function GalleryItem({ description, imageURL }) {
    console.log('Image path: ', imageURL)
  return (
    <div className='mt-14 flex flex-col justify-center items-start'>
      <p className='font-body text-accent-gray'>{description}</p>
      <img src='../assets/hero_image.png' className='h-64' />
    </div>
  )
}
