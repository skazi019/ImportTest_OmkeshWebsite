import ContactItem from './ContactItem'
import CTAimage from '/cta_image.png'

export default function Contact() {
  return (
    <>
      <section className='mt-48 lg:mt-48 h-auto w-screen w-full lg:mx-auto lg:max-w-6xl'>
        <div className='mt-14 flex flex-row justify-center items-center'>
          <div className='w-screen md:w-3/5'>
            <div className='h-56 pl-6 md:pl-8 lg:pl-10 flex flex-col justify-center bg-accent-gray lg:bg-inherit'>
              <h1 className='text-4xl font-body text-black lg:text-accent-gray uppercase tracking-wide'>
                Let's Design
              </h1>
              <h1 className='text-5xl font-semibold font-body text-accent-red uppercase tracking-wide'>
                The Future
              </h1>
            </div>
            <div className='h-80 pl-8 md:pl-12 lg:pl-10 flex flex-col justify-center items-start bg-accent-red lg:bg-inherit'>
              <div className='flex flex-col gap-6 justify-start items-start'>
                <ContactItem type={'P.'} detail={'+91 9999999999'} />
                <ContactItem type={'E.'} detail={'jskc@gmail.com'} />
                <ContactItem type={'A.'} detail={'Borivali West Mumbai 400091'} />
                <ContactItem type={'T.'} detail={'10AM - 6PM (WEEKDAYS)'} />
              </div>
            </div>
          </div>
          <img
            src={CTAimage}
            className='hidden md:block h-[34rem] object-cover w-2/5'
          />
        </div>
      </section>
    </>
  )
}
