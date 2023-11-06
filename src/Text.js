import React from 'react'
import { useSelector } from 'react-redux'

const  Text = () => {
  const data=useSelector((store)=>store.appSlice.text);
  return (
    <div className='w-[500px]'>
      <h1 className='font-bold text-xl p-2 m-2'>Call Record</h1>
      <p className='w-[500px] border border-black-400 shadow-md p-2 m-2'>
        {data}
      </p>
    </div>
  )
}

export default Text
