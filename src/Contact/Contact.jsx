import React, { useState, useEffect } from 'react'
import ContactItem from './ContactItem'
import CTAimage from '../assets/cta_image.png'

export default function Contact() {
  const [contactDetails, setContactDetails] = useState([])

  function getContactDetails() {
    fetch(process.env.REACT_APP_BACKEND_URI + '/contact').then(async function (
      response
    ) {
      const res = response
      const data = await res.json()
      if (data) {
        setContactDetails(data)
      } else {
        console.log('Error while getting princples')
      }
    })
  }

  useEffect(() => {
    getContactDetails()
    return () => {}
  }, [])

  return (
    <>
      <section
        id='contactus'
        className='mt-48 lg:mt-48 h-auto w-screen w-full lg:mx-auto lg:max-w-6xl'
      >
        <div className='mt-14 flex flex-row justify-center items-center overflow-clip'>
          <div className='w-screen h-[40rem] md:w-3/5'>
            <div className='h-2/5 pl-6 md:pl-8 lg:pl-10 flex flex-col justify-center bg-accent-gray lg:bg-inherit'>
              <h1 className='text-4xl font-body text-black lg:text-accent-gray uppercase tracking-wide'>
                Let's Design
              </h1>
              <h1 className='text-5xl font-semibold font-body text-accent-red uppercase tracking-wide'>
                The Future
              </h1>
            </div>
            <div className='py-4 h-3/5 pl-8 md:pl-12 lg:pl-10 flex flex-col justify-center items-start bg-accent-red lg:bg-inherit'>
              <div className='flex flex-col gap-6 justify-start items-start'>
                {contactDetails.phone && (
                  <ContactItem type={'P.'} detail={contactDetails.phone} />
                )}
                {contactDetails.email && (
                  <ContactItem type={'E.'} detail={contactDetails.email} />
                )}
                {contactDetails.address && (
                  <ContactItem
                    type={'A.'}
                    detail={contactDetails.address}
                  />
                )}
                {contactDetails.work_timings && (
                  <ContactItem type={'T.'} detail={contactDetails.work_timings} />
                )}
              </div>
            </div>
          </div>
          <img
            src={CTAimage}
            className='hidden md:block h-[40rem] overflow-clip object-cover w-2/5'
          />
        </div>
      </section>
    </>
  )
}
