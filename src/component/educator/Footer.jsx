import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
  <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t bg-cyan-100/70">
    <div className='flex items-center gap-4'>
<img className='hidden md:block w-20' src={assets.ocjtechR} alt="logo" />

<div className='hidden md:block h-7 w-px bg-gray-500/60'>
</div>
<p>Copyright 2026 ©  <span className="text-red-400">OCJ TECH</span>. All Right Reserved. Powered by Opara Chibuike Justine</p>

    </div>

    <div className='flex items-center gap-3 max-md:mt-4'>
<a href="">
  <img src={assets.facebook_icon} alt="" className='w-6 h-8 hover:scale-110 transition ' />
</a>
<a href="">
  <img src={assets.twitter_icon} alt="" className='w-6 h-8 hover:scale-110 transition' />
</a>
<a href="">
  <img src={assets.instagram_icon} alt="" className='w-6 h-8 hover:scale-110 transition'/>
</a>

    </div>

  </footer>
  )
}

export default Footer
