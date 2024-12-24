import React, { useState } from 'react'

const Form = () => {
  const [val,setVal]=  useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <div>
      {val.map((item, index) => (
        <h1 className='bg-zinc-300 p-2 w-8 rounded-full'>{item}</h1>
      ))}
          <button className='bg-green-300 p-2 rounded-full text-xs'
          onClick={()=>setVal(()=>val.filter((item,index)=>index!=val.length-1))}
          >Click Me!</button>
    </div>
  );
}

export default Form