import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO() {
  return (
    <div className='application'>
      <Helmet>
        <meta charset='utf-8' />
        <link rel='icon' href='/static/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='We are professional structural consultants building safe and solid building designs'
        />
        // <link rel='apple-touch-icon' href='/logo192.png' />
        <link rel='manifest' href='/static/manifest.json' />
        <title>Jay Shree Krishna Consultants</title>
      </Helmet>
    </div>
  )
}
