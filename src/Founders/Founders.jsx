import FoundingMember from './FoundingMember'
import founder1Image from '/founder_1.png'
import founder2Image from '/founder_2.png'

export default function Founders() {
  return (
    <>
      <section className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
          Our Founders
        </h1>
        <div className='mt-14 flex flex-col lg:flex-row gap-10 lg:gap-2 justify-center lg:justify-start items-center lg:items-start'>
          <FoundingMember
            name={'Lorem Ipsum'}
            image={founder1Image}
            description={
              'Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae lobortis neque morbi ultrices pellentesque mauris. Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae lobortis neque morbi ultrices pellentesque mauris'
            }
            extraClasses={'lg:w-1/2'}
          />
          <FoundingMember
            name={'Lorem Ipsum'}
            image={founder2Image}
            description={
              'Lorem ipsum dolor sit amet consectetur. Sed faucibus at vitae lobortis neque morbi ultrices pellentesque mauris.'
            }
            extraClasses={'lg:w-1/2'}
          />
        </div>
      </section>
    </>
  )
}
