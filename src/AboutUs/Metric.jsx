export default function Metric({ number, text, addPlus }) {
  return (
    <div className='w-32 flex flex-col justify-center items-center'>
      <p className='font-body text-7xl'>
        {addPlus ? (
          <>
            {number}
            <span className="text-accent-red">+</span>
          </>
        ) : (
          number
        )}
      </p>
      <div className='h-[0.1px] w-full mt-1 bg-white'></div>
      <p className='w-20 mt-1 font-body text-accent-gray text-center break-words'>{text}</p>
    </div>
  )
}
