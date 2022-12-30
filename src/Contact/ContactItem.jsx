import React from 'react'

export default function ContactItem({ type, detail }) {
  return (
    <div className='flex flex-row gap-2 lg:gap-8 justify-start items-start'>
      <p className='text-xl font-body font-semibold tracking-wide text-white lg:text-accent-red'>{type}</p>
      <p className='w-44 text-xl break-words font-body font-semibold tracking-wide'>{detail}</p>
    </div>
  )
}
