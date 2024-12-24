import React, { useState } from 'react'

const Practice = () => {
    const [val, setVal] = useState([
      { name: "eeshu", age: 32 },
      { name: "rahul", age: 44 },
      { name: "sweta", age: 14 },
      { name: "neha", age: 16 },
    ]);
  return (
    <div>
      {val.map((item, index) => (
        <div>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
          
          <button
          onClick={()=>setVal(()=>val.map(item=>item.name==="eeshu"?({name:"eeshu",age:24}):item))}
              className='bg-green-300 p-2 rounded-full text-xs'>Click Me!</button>
    </div>
  );
}

export default Practice