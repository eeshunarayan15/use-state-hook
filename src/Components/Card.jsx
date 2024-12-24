import React, { useState } from 'react'

const Card = () => {
  const [banned,setBanned]=  useState(false)
  return (
    <div className=" w-full h-screen overflow-x-hidden bg-zinc-100 flex justify-center items-center ">
      <div className='w-32 bg-slate-200 h-32  flex flex-col justify-center gap-4'>
        <h1 className='text-black-100 text-center'>{banned.toString()}</h1>
        <button className='text-sm py-1 text-zinc-100 bg-green-400 rounded-full mx-4' onClick={() => setBanned(!banned)}>Click me</button>
      </div>
    </div>
  );
}

export default Card