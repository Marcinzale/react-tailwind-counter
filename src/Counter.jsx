import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  }

  const decreament = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className='flex flex-col m-auto bg-white w-96 rounded-3xl drop-shadow-xl justify-center items-center h-96 mt-12'>
        <h1 className="text-9xl font-bold">{count}</h1>
      </div>
      <div className='w-96 mt-6 flex flex-raw m-auto justify-evenly'>
        <button onClick={increament} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-28'>Increase</button>
        <button onClick={reset} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28'>Reset</button>
        <button onClick={decreament} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28'>Decrease</button>
      </div>
    </>
  )
}

export default Counter