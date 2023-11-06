import React from 'react'
import Text from './Text'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import Key from './Key'
import { useDispatch, useSelector } from 'react-redux'
import { getResponseFromOpenAI } from './Redux/appSlice'


const Body = () => {
  const dispatch=useDispatch();
  const text=useSelector((store)=>store.appSlice.text);
  const handleSubmit=()=>{
    dispatch(getResponseFromOpenAI({
      "value":text
    }))

  }
  return (
    <div className='flex justify-between'>
      <div>
         <Text/>
      </div>

      <div className=' relative   top-14 w-14 h-14'>
      <BsFillArrowRightCircleFill  onClick={handleSubmit} className=''/>

      </div>

      <div>
        <Key/>

      </div>
    </div>
  )
}

export default Body
