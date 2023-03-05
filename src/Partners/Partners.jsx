import React, { useState, useEffect } from 'react'

export default function Partners() {
  const [partners, setPartners] = useState([])

  function getAllPartners() {
    fetch(process.env.REACT_APP_BACKEND_URI + '/partners').then(async function (
      response
    ) {
      const res = response
      const data = await res.json()
      if (data) {
        partners(data)
      } else {
        console.log('Error while getting partners')
      }
    })
  }

  useEffect(() => {
    getAllPartners()
    return () => {}
  }, [])

  return (
    <>
      <section
        id='partners'
        className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'
      >
        <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
          Our Partners
        </h1>
        <div className='mt-14 px-10 flex flex-row gap-20 md:gap-8 flex-wrap justify-center md:justify-between items-center'>
          {partners.map((item) => (
            <img src={item.logo_url} className='w-32' />
          ))}
        </div>
      </section>
    </>
  )
}
