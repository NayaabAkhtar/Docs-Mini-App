import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
     <div className='absolute top-[5%] text-zinc-600 w-full flex justify-center font-semibold py-10 text-lg'>Documents</div>
      <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs.</h1>
    </div>
    </>
  )
}

export default Background