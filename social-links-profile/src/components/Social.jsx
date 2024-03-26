import React from 'react'

function Social({children}) {
  return (
    <button className='p-3 rounded-md text-white bg-grey w-full text-base sm:text-sm font-medium hover:cursor-pointer hover:text-offBlack hover:bg-green'>
        {children}
    </button>
  )
}

export default Social