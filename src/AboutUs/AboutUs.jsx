import { motion } from 'framer-motion'
import Metric from './Metric'
import aboutUsDivider from '../assets/aboutus_divider_2.png'
import { useInView } from 'react-intersection-observer'

export default function AboutUs() {
  const [nodeRefFirst, inViewFirst] = useInView({
    triggerOnce: true,
  })
  const [nodeRefSecond, inViewSecond] = useInView({
    triggerOnce: true,
  })

  return (
    <>
      <section className='mt-32 lg:mt-60 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 justify-start items-start'>
          <h1 className='lg:w-1/2 font-header font-semibold text-5xl leading-normal break-words'>
            About Us
          </h1>
          <div className='lg:w-1/2 flex flex-col gap-28 justify-center items-center'>
            <p className='mt-3 font-body text-accent-gray text-left tracking-wide'>
              Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae
              lobortis neque morbi ultrices pellentesque mauris. Cras porta
              porttitor maecenas arcu tincidunt. Nibh vestibulum consectetur at
              lectus in. Felis tincidunt sem id phasellus quam egestas id felis
              at.
            </p>
            <div className='flex flex-col gap-24 justify-center items-center'>
              <div
                ref={nodeRefFirst}
                className='flex flex-row gap-24 justify-center items-center'
              >
                {inViewFirst ? (
                  <>
                    <Metric
                      number={50}
                      text={'Designs Completed'}
                      addPlus={true}
                    />
                    <Metric
                      number={38}
                      text={'Projects Delivered'}
                      addPlus={true}
                    />
                  </>
                ) : null}
              </div>
              <div
                ref={nodeRefSecond}
                className='flex flex-row gap-24 justify-center items-center'
              >
                {inViewSecond ? (
                  <>
                    <Metric
                      number={15}
                      text={'Clients Impacted'}
                      addPlus={true}
                    />
                    <Metric number={3} text={'Awards Won'} addPlus={false} />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.img
        initial={{
          width: '100%',
        }}
        src={aboutUsDivider}
        className='mt-36 object-cover max-w-[120rem] mx-auto aspect-auto saturate-50'
      />
    </>
  )
}
