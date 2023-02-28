import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Founders() {
  const [mobile, setmobile] = useState(false)
  const [allFounders, setAllFounders] = useState([])

  const interpretViewport = () => {
    // for screen width below 1024px we do not want the Hero Image animation.
    // So we check the screen width and accordingly show either the motion.img
    // or just img tag
    // tailwind 5xl - 1024px

    if (window.innerWidth < 1024) {
      console.log('setting mobile true')
      setmobile(true)
    } else {
      setmobile(false)
    }
  }

  function getAllFounders() {
    fetch(process.env.REACT_APP_BACKEND_URI + '/founders').then(async function (
      response
    ) {
      const res = response
      const data = await res.json()
      if (data) {
        console.log(data)
        setAllFounders(data)
      } else {
        console.log('Error while getting princples')
      }
    })
  }

  useEffect(() => {
    interpretViewport()
    getAllFounders()
    return () => {}
  }, [window.innerWidth])

  return (
    <>
      <section className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
          Our Founders
        </h1>
        {!mobile ? (
          <div className='mt-14 h-[35rem] flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start overflow-hidden rounded-md'>
            <AnimatePresence>
              {allFounders.map((founderData, index) => (
                <motion.div
                  initial={{
                    width: 100 / allFounders.length + '%',
                  }}
                  key={founderData.name + index}
                  whileHover={{
                    width: '80%',
                    transition: {
                      duration: 0.5,
                      type: 'tween',
                      ease: 'easeInOut',
                    },
                  }}
                  className='relative group overflow-hidden'
                >
                  <img
                    src={founderData.imageUrl}
                    className='object-cover h-[55rem] lg:hover:opacity-40'
                  />
                  <div className='absolute hidden group-hover:block group-hover:opacity-100 transition duration-300 left-4 top-8'>
                    <h1 className='font-header text-5xl'>{founderData.name}</h1>
                    <p
                      className={`mt-4 text-accent-gray w-64
            ${mobile ? 'block' : 'hidden group-hover:block duration-300'}`}
                    >
                      {founderData.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className='mt-14 flex flex-col lg:flex-row gap-10 lg:gap-2 justify-center lg:justify-start items-center lg:items-start'>
            {allFounders.map((founderData, index) => (
              <div className='relative group overflow-hidden'>
                <img src={founderData.imageUrl} />
                <div className='absolute left-4 bottom-8'>
                  <h1 className='font-header text-5xl'>{founderData.name}</h1>
                  <p className='mt-4 text-accent-gray block'>
                    {founderData.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
