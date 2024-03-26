import React from 'react'
import Social from './Social'

function SocialLinks() {
  return (
    <div className='mt-8 sm:mt-3 flex flex-col items-start justify-center gap-4 sm:gap-3 w-full'>
        <Social>GitHub</Social>
        <Social>Frontend Mentor</Social>
        <Social>LinkedIn</Social>
        <Social>Twitter</Social>
        <Social>Instagram</Social>
    </div>
  )
}

export default SocialLinks