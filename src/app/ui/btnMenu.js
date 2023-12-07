'use client'
import React from 'react'

export default function MenuBtn(props) {
const isClicked = props.isClicked
    
    const hide = isClicked ? 'opacity-100 transition-all duration-1000 ease-in-out delay-200' : 'opacity-0  '
    const move = isClicked ? 'opacity-100 transition-all duration-1000 ease-in-out' : 'opacity-0 -translate-x-44 transition-all duration-1000 ease-in-out'
    const rotateRight = isClicked ? 'transition-all duration-1000 ease-in-out' : 'transform rotate-45  transition-all duration-1000 ease-in-out'
    const rotateLeft = isClicked ? 'transition-all duration-1000 ease-in-out' : 'transform -rotate-90  transition-all duration-1000 ease-in-out'
    const drop = isClicked ? 'overflow-hidden opacity-0 -translate-x-full transition-all duration-1000 ease-in-out' : 'opacity-100 transition-all duration-1000 ease-in-out'

  return (
    
      <button onClick={props.handleClick} className={`z-50 col-start-10 md:ml-auto md:mr-16`}>
        <div className=' mb-2  m-auto flex justify-between items-center h-8 w-20 text-xl font-extrabold  cursor-pointer '>
           
            <div className='flex flex-col justify-between h-6 w-12 ml-12'>
              <span className={`${hide} bg-primary-950 block h-1 w-full rounded-sm`}></span>
              <span className={`${rotateRight} bg-primary-950 block h-1 w-full rounded-sm`}><span className={`${rotateLeft} bg-primary-950 block h-1 w-full rounded-sm`}></span></span>
              <span className={`${hide} bg-primary-950 block h-1 w-full rounded-sm`}></span>
            </div>  
        </div>
       </button>
  )
}