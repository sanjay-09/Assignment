import React from 'react'
import { useSelector } from 'react-redux'

const Key = () => {
  const text2=useSelector((store)=>store.appSlice.text2);
  return (
    
    <div className='w-[500px]'>
    <h1 className='font-bold text-xl p-2 m-2'>key Pointers</h1>
    <p className='w-[500px] border border-black-400 shadow-md p-2 m-2'>
    {text2}
    </p>
  </div>
    
  )
}

export default Key
