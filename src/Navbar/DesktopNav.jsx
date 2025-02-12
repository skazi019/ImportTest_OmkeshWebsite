import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Headroom from 'react-headroom'

const links = [
  { name: 'Home', to: '#', id: 1 },
  { name: 'About', to: '#aboutus', id: 2 },
  { name: 'Principles', to: '#principles', id: 3 },
  { name: 'Gallery', to: '#gallery', id: 4 },
  { name: 'Founders', to: '#founders', id: 5 },
  { name: 'Partners', to: '#partners', id: 6 },
  { name: 'Contact', to: '#contactus', id: 7 },
]

const SCREENWIDTH = window.innerWidth
const NAVANIMATIONDURATION = 0.2

export default function DesktopNavbar() {
  const [openNav, setopenNav] = useState(false)

  return (
    <>
      <Headroom>
        <div className='transition px-4 md:px-10 lg:mx-auto lg:max-w-6xl w-full pt-12 flex flex-row justify-end items-right'>
          <button className='' onClick={() => setopenNav(!openNav)}>
            <svg
              className='w-6 h-6'
              width='36'
              height='24'
              viewBox='0 0 36 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M36 22.5C36 22.8978 35.842 23.2794 35.5607 23.5607C35.2794 23.842 34.8978 24 34.5 24L1.5 24C1.10218 24 0.720643 23.842 0.439339 23.5607C0.158034 23.2794 0 22.8978 0 22.5C0 22.1022 0.158034 21.7206 0.439339 21.4393C0.720643 21.158 1.10218 21 1.5 21L34.5 21C34.8978 21 35.2794 21.158 35.5607 21.4393C35.842 21.7206 36 22.1022 36 22.5ZM36 12C36 12.3978 35.842 12.7794 35.5607 13.0607C35.2794 13.342 34.8978 13.5 34.5 13.5L18 13.5C17.6022 13.5 17.2206 13.342 16.9393 13.0607C16.658 12.7794 16.5 12.3978 16.5 12C16.5 11.6022 16.658 11.2206 16.9393 10.9393C17.2206 10.658 17.6022 10.5 18 10.5L34.5 10.5C34.8978 10.5 35.2794 10.658 35.5607 10.9393C35.842 11.2206 36 11.6022 36 12ZM36 1.5C36 1.89782 35.842 2.27936 35.5607 2.56066C35.2794 2.84197 34.8978 3 34.5 3L1.5 3C1.10218 3 0.720643 2.84197 0.439339 2.56066C0.158034 2.27936 0 1.89782 0 1.5C0 1.10218 0.158034 0.720643 0.439339 0.439339C0.720643 0.158034 1.10218 0 1.5 0L34.5 0C34.8978 0 35.2794 0.158034 35.5607 0.439339C35.842 0.720643 36 1.10218 36 1.5Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
      </Headroom>

      <AnimatePresence>
        {openNav ? (
          <motion.section
            key='navbar'
            initial={{
              x: SCREENWIDTH,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: NAVANIMATIONDURATION,
                ease: [0.1, 0.05, 0.1, 0.9],
              },
            }}
            exit={{
              x: SCREENWIDTH,
              opacity: 0,
              transition: {
                duration: NAVANIMATIONDURATION,
                ease: [0.9, 0.1, 0.05, 0.1],
              },
            }}
            className='fixed z-10 top-0 left-0 h-screen w-screen bg-red-600'
          >
            <div className='px-4 md:px-10 lg:mx-auto lg:max-w-6xl w-full pt-12 flex flex-row justify-end items-right'>
              <button className='' onClick={() => setopenNav(!openNav)}>
                <svg
                  className='w-6 h-6'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M23.4219 2.0886C23.521 1.98942 23.5997 1.87168 23.6534 1.74211C23.7071 1.61253 23.7347 1.47365 23.7347 1.33339C23.7347 1.19314 23.7071 1.05426 23.6534 0.924684C23.5997 0.795106 23.521 0.677369 23.4219 0.578195C23.3227 0.47902 23.205 0.400351 23.0754 0.346679C22.9458 0.293006 22.8069 0.265381 22.6667 0.265381C22.5264 0.265381 22.3875 0.293006 22.258 0.346679C22.1284 0.400351 22.0106 0.47902 21.9115 0.578195L12 10.4918L2.08853 0.578195C1.98936 0.47902 1.87162 0.400351 1.74205 0.346679C1.61247 0.293006 1.47359 0.265381 1.33333 0.265381C1.19308 0.265381 1.0542 0.293006 0.924623 0.346679C0.795045 0.400351 0.677308 0.47902 0.578134 0.578195C0.478959 0.677369 0.40029 0.795106 0.346618 0.924684C0.292945 1.05426 0.26532 1.19314 0.26532 1.33339C0.26532 1.47365 0.292945 1.61253 0.346618 1.74211C0.40029 1.87168 0.478959 1.98942 0.578134 2.0886L10.4917 12.0001L0.578134 21.9115C0.377842 22.1118 0.26532 22.3835 0.26532 22.6667C0.26532 22.95 0.377842 23.2216 0.578134 23.4219C0.778425 23.6222 1.05008 23.7347 1.33333 23.7347C1.61659 23.7347 1.88824 23.6222 2.08853 23.4219L12 13.5083L21.9115 23.4219C22.1118 23.6222 22.3834 23.7347 22.6667 23.7347C22.9499 23.7347 23.2216 23.6222 23.4219 23.4219C23.6222 23.2216 23.7347 22.95 23.7347 22.6667C23.7347 22.3835 23.6222 22.1118 23.4219 21.9115L13.5083 12.0001L23.4219 2.0886Z'
                    fill='#FCFCFC'
                  />
                </svg>
              </button>
            </div>

            <div className='px-4 md:px-10 lg:mx-auto lg:max-w-6xl w-full '>
              <motion.div className='h-screen w-fit flex flex-col gap-8 justify-center items-left ml-14 pb-24'>
                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    className='text-5xl duration-300 ease-in-out hover:translate-x-4 hover:border-l-4 hover:pl-4'
                    onClick={() => setopenNav(!openNav)}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </>
  )
}
