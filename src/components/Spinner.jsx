import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div  className='flex items-center justify-center translate-y-[-100px] h-[100vh]'>
      <div className='spinner'></div>
    </div>
  )
}

export default Spinner
