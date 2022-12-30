
import masonLogo from '../assets/mason_logo.png'
import amazonLogo from '../assets/amazon_logo.png'
import jpmLogo from '../assets/jpm_logo.png'
import galileoLogo from '../assets/galileo_logo.png'

export default function Partners() {
  return (
    <>
      <section className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
          Our Partners
        </h1>
        <div className='mt-14 px-10 flex flex-row gap-20 md:gap-8 flex-wrap justify-center md:justify-between items-center'>
            <img src={masonLogo} className='w-32' />
            <img src={amazonLogo} className='w-32' />
            <img src={jpmLogo} className='w-32' />
            <img src={galileoLogo} className='w-32' />
        </div>
      </section>
      <div className='h-screen'></div>
    </>
  )
}
