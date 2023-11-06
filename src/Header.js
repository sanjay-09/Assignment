import React from 'react'
import Audio from './Audio'

const Header = () => {
  return (
    <div className='m-2 p-2 flex justify-between items-center'>
        <div>
            <h1 className='font-bold '>Call DIGEST</h1>
            </div> 
            <div className='border border-black-100 '>
                <h3 className='text-xl p-2 m-2'>Upload AUDIO FILE</h3>
                </div> 
                <div>
                    <Audio/>

                </div>
    </div>
  )
}

export default Header
