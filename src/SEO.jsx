import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function SEO() {
  const [seoData, setSeoData] = useState([])

  function getSeoData() {
    fetch(process.env.REACT_APP_BACKEND_URI + '/seo').then(
      async function (response) {
        const res = response
        const data = await res.json()
        if (data) {
          console.log(data)
          setSeoData(data)
        } else {
          console.log('Error while getting princples')
        }
      }
    )
  }

  useEffect(() => {
    getSeoData()
    return () => {}
  }, [])

  return (
    <div className='application'>
      <Helmet>
        <meta charset='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content={seoData.description}
        />
        // <link rel='apple-touch-icon' href='/logo192.png' />
        <link rel='manifest' href='/manifest.json' />
        <title>{seoData.title}</title>
      </Helmet>
    </div>
  )
}
