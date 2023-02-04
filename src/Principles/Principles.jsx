import { useState, useEffect } from 'react'
import PrincipleItem from './PrincipleItem'
import { useInView } from 'react-intersection-observer'

export default function Principles() {
  const [nodeRef, inView] = useInView()
  const [show, setShow] = useState(false)

  // const hideShowPrinciples = (inView) => {
  //   if (inView) {
  //     console.log('showing principles')
  //     setShow(true)
  //   }
  // }
  //
  // useEffect(() => {
  //   hideShowPrinciples(inView)
  //   return () => {}
  // }, [])

  return (
    <>
      <section className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
          Our Principles
        </h1>
        <div className='mt-14 lg:mt-20'>
          <PrincipleItem
            header={'Lorem ipsum dolor sit amet consectetur'}
            description={
              'Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae lobortis neque morbi ultrices pellentesque mauris.'
            }
          />
          <PrincipleItem
            header={'Lorem ipsum dolor sit amet consectetur'}
            description={
              'Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae lobortis neque morbi ultrices pellentesque mauris.'
            }
          />
          <PrincipleItem
            header={'Lorem ipsum dolor sit amet consectetur'}
            description={
              'Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae lobortis neque morbi ultrices pellentesque mauris.'
            }
            borderBottom={true}
          />
        </div>
      </section>
    </>
  )
}
