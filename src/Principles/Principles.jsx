import React, { useState, useEffect } from 'react'
import PrincipleItem from './PrincipleItem'

export default function Principles() {
  const [principles, setPrinciples] = useState([])

  function getAllPrinciples() {
    fetch(process.env.REACT_APP_BACKEND_URI + '/principles').then(
      async function (response) {
        const res = response
        const data = await res.json()
        if (data) {
          console.log(data)
          setPrinciples(data)
        } else {
          console.log('Error while getting princples')
        }
      }
    )
  }

  useEffect(() => {
    getAllPrinciples()
    return () => {}
  }, [])

  return (
    <>
      <section id="principles" className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
          Our Principles
        </h1>
        <div className='mt-14 lg:mt-20'>
          {principles.map((item) => (
            <PrincipleItem
              key={item.order + item.title}
              header={item.title}
              description={item.description}
              borderBottom={item.border_bottom}
            />
          ))}
        </div>
      </section>
    </>
  )
}
