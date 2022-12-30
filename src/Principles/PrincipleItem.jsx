export default function PrincipleItem({ header, description, borderBottom }) {
  return (
    <>
      <div className='h-[0.1px] w-full bg-accent-gray'></div>
      <div className='py-8 lg:px-10 flex flex-col lg:flex-row justify-start items-start lg:items-center'>
        <h1 className='font-body text-3xl lg:w-2/5 lg:pr-10 tracking-wide'>
          {header}
        </h1>
        <p className='font-body text-accent-gray mt-2 lg:w-3/5 break-words'>{description}</p>
      </div>
      {borderBottom ? <div className='h-[0.1px] w-full bg-accent-gray'></div> : null}
    </>
  )
}
