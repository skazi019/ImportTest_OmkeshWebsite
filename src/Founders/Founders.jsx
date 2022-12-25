import FoundingMember from "./FoundingMember"
import founder1Image from '../assets/founder_1.png'
import founder2Image from '../assets/founder_2.png'

export default function Founders() {
  return (
    <>
      <section className='mt-32 lg:mt-34 h-auto w-screen w-full px-4 md:px-10 lg:mx-auto lg:max-w-6xl'>
        <h1 className='font-header font-semibold text-5xl leading-normal break-words'>
          Our Founders
        </h1>
            <div className="mt-14 flex flex-col lg:flex-row gap-2 justify-start items-start">
                <FoundingMember name={'Lorem Ipsum'} image={founder1Image} extraClasses={'lg:w-1/2'} />
                <FoundingMember name={'Lorem Ipsum'} image={founder2Image} extraClasses={'lg:w-1/2'}/>
            </div>
      </section>
      <div className='h-screen'></div>
    </>
  )
}
