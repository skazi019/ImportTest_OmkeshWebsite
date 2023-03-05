import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { apiData } from '../data'
import GalleryItem from './GalleryItem'

export default function Gallery() {
  const [imageIndex, setImageIndex] = useState(1)
  const [leftButtonAnimate, setleftButtonAnimate] = useState(false)
  const [rightButtonAnimate, setrightButtonAnimate] = useState(false)
  const [galleryImages, setGalleryImages] = useState([])

  const animateGalleryButton = (setFunc) => {
    setFunc(true)
    setTimeout(() => {
      setFunc(false)
    }, 250)
  }

  const nextImage = () => {
    let tempIndex = imageIndex + 1
    if (tempIndex > apiData.length) {
      setImageIndex(1)
    } else {
      setImageIndex(tempIndex)
    }
    animateGalleryButton(setrightButtonAnimate)
  }

  const prevImage = () => {
    let tempIndex = imageIndex - 1
    if (imageIndex <= 1) {
      setImageIndex(apiData.length)
    } else {
      setImageIndex(tempIndex)
    }
    animateGalleryButton(setleftButtonAnimate)
  }

  function getAllGalleryImages() {
    fetch(process.env.REACT_APP_BACKEND_URI + '/gallery').then(async function (
      response
    ) {
      const res = response
      const data = await res.json()
      if (data) {
        console.log(data)
        setGalleryImages(data)
      } else {
        console.log('Error while getting gallery images')
      }
    })
  }

  useEffect(() => {
    getAllGalleryImages()
    return () => {}
  }, [])

  return (
    <>
      <section id="gallery" className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
            Gallery
          </h1>
          <div className='flex flex-row justify-center items-center gap-4'>
            <motion.button
              animate={{
                opacity: leftButtonAnimate ? 0 : 1,
                transition: {
                  duration: 0.3,
                  type: 'ease',
                },
              }}
              onClick={() => prevImage()}
            >
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='cursor-pointer'
              >
                <path
                  d='M24 5.25C20.2916 5.25 16.6665 6.34967 13.5831 8.40994C10.4996 10.4702 8.09641 13.3986 6.67727 16.8247C5.25812 20.2508 4.88681 24.0208 5.61028 27.6579C6.33376 31.2951 8.11952 34.636 10.7418 37.2583C13.364 39.8805 16.7049 41.6662 20.3421 42.3897C23.9792 43.1132 27.7492 42.7419 31.1753 41.3227C34.6014 39.9036 37.5298 37.5004 39.5901 34.4169C41.6503 31.3335 42.75 27.7084 42.75 24C42.7401 19.0302 40.7615 14.2669 37.2473 10.7527C33.7332 7.23853 28.9698 5.25991 24 5.25ZM24 41.25C20.5883 41.25 17.2532 40.2383 14.4164 38.3428C11.5797 36.4474 9.3687 33.7533 8.06309 30.6013C6.75747 27.4493 6.41587 23.9809 7.08146 20.6347C7.74706 17.2885 9.38996 14.2149 11.8024 11.8024C14.2149 9.38995 17.2885 7.74705 20.6347 7.08145C23.9809 6.41586 27.4493 6.75747 30.6013 8.06308C33.7533 9.36869 36.4474 11.5797 38.3429 14.4164C40.2383 17.2532 41.25 20.5883 41.25 24C41.245 28.5735 39.426 32.9582 36.1921 36.1921C32.9582 39.426 28.5735 41.245 24 41.25ZM32.25 24C32.25 24.1989 32.171 24.3897 32.0303 24.5303C31.8897 24.671 31.6989 24.75 31.5 24.75H18.3188L23.4 29.8313C23.5344 29.9767 23.6091 30.1675 23.6091 30.3656C23.6091 30.5637 23.5344 30.7545 23.4 30.9C23.3283 30.9697 23.243 31.024 23.1495 31.0595C23.056 31.095 22.9562 31.1109 22.8563 31.1062C22.7593 31.1094 22.6628 31.0928 22.5725 31.0573C22.4822 31.0218 22.4001 30.9683 22.3313 30.9L15.975 24.525C15.9047 24.4568 15.8488 24.3752 15.8106 24.285C15.7724 24.1949 15.7528 24.0979 15.7528 24C15.7528 23.9021 15.7724 23.8051 15.8106 23.715C15.8488 23.6248 15.9047 23.5432 15.975 23.475L22.3313 17.1C22.473 16.9583 22.6652 16.8787 22.8656 16.8787C23.0661 16.8787 23.2583 16.9583 23.4 17.1C23.5417 17.2417 23.6214 17.4339 23.6214 17.6344C23.6214 17.8348 23.5417 18.027 23.4 18.1688L18.3188 23.25H31.5C31.6989 23.25 31.8897 23.329 32.0303 23.4697C32.171 23.6103 32.25 23.8011 32.25 24Z'
                  fill='#F8F8F8'
                />
              </svg>
            </motion.button>
            <motion.button
              animate={{
                opacity: rightButtonAnimate ? 0 : 1,
                transition: {
                  duration: 0.3,
                  type: 'ease',
                },
              }}
              onClick={() => nextImage()}
            >
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='rotate-180 cursor-pointer'
              >
                <path
                  d='M24 5.25C20.2916 5.25 16.6665 6.34967 13.5831 8.40994C10.4996 10.4702 8.09641 13.3986 6.67727 16.8247C5.25812 20.2508 4.88681 24.0208 5.61028 27.6579C6.33376 31.2951 8.11952 34.636 10.7418 37.2583C13.364 39.8805 16.7049 41.6662 20.3421 42.3897C23.9792 43.1132 27.7492 42.7419 31.1753 41.3227C34.6014 39.9036 37.5298 37.5004 39.5901 34.4169C41.6503 31.3335 42.75 27.7084 42.75 24C42.7401 19.0302 40.7615 14.2669 37.2473 10.7527C33.7332 7.23853 28.9698 5.25991 24 5.25ZM24 41.25C20.5883 41.25 17.2532 40.2383 14.4164 38.3428C11.5797 36.4474 9.3687 33.7533 8.06309 30.6013C6.75747 27.4493 6.41587 23.9809 7.08146 20.6347C7.74706 17.2885 9.38996 14.2149 11.8024 11.8024C14.2149 9.38995 17.2885 7.74705 20.6347 7.08145C23.9809 6.41586 27.4493 6.75747 30.6013 8.06308C33.7533 9.36869 36.4474 11.5797 38.3429 14.4164C40.2383 17.2532 41.25 20.5883 41.25 24C41.245 28.5735 39.426 32.9582 36.1921 36.1921C32.9582 39.426 28.5735 41.245 24 41.25ZM32.25 24C32.25 24.1989 32.171 24.3897 32.0303 24.5303C31.8897 24.671 31.6989 24.75 31.5 24.75H18.3188L23.4 29.8313C23.5344 29.9767 23.6091 30.1675 23.6091 30.3656C23.6091 30.5637 23.5344 30.7545 23.4 30.9C23.3283 30.9697 23.243 31.024 23.1495 31.0595C23.056 31.095 22.9562 31.1109 22.8563 31.1062C22.7593 31.1094 22.6628 31.0928 22.5725 31.0573C22.4822 31.0218 22.4001 30.9683 22.3313 30.9L15.975 24.525C15.9047 24.4568 15.8488 24.3752 15.8106 24.285C15.7724 24.1949 15.7528 24.0979 15.7528 24C15.7528 23.9021 15.7724 23.8051 15.8106 23.715C15.8488 23.6248 15.9047 23.5432 15.975 23.475L22.3313 17.1C22.473 16.9583 22.6652 16.8787 22.8656 16.8787C23.0661 16.8787 23.2583 16.9583 23.4 17.1C23.5417 17.2417 23.6214 17.4339 23.6214 17.6344C23.6214 17.8348 23.5417 18.027 23.4 18.1688L18.3188 23.25H31.5C31.6989 23.25 31.8897 23.329 32.0303 23.4697C32.171 23.6103 32.25 23.8011 32.25 24Z'
                  fill='#F8F8F8'
                />
              </svg>
            </motion.button>
          </div>
        </div>
        {galleryImages
          .filter((item) => item.index === imageIndex)
          .map((item) => (
            <GalleryItem
              key={item.index}
              description={item.description}
              imageURL={item.imageUrl}
            />
          ))}
      </section>
    </>
  )
}
