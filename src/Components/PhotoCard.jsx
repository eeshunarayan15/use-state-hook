import React, { useState } from 'react'

const PhotoCard = () => {
    const [val, setVal] = useState(false)
  return (
      <div>
          <h1> {val === false ? "bahar jao" : "andar aao"}</h1>
          <form action="">
              <input type={ val===false?"password":"text"} placeholder='enter passowrd' />
              <button onClick={()=>(setVal(!val))}>show passowrd</button>
          </form>
          <button
              


         onClick={()=>(setVal(!val))}
              className='bg-red-200'>change</button>
      </div>
  )
}

export default PhotoCard