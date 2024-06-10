'use client'

import {MdLightMode, MdDarkMode} from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {

    const {theme, setTheme, systemTheme} = useTheme()
    const [mounted, setMouted] = useState(false)
    const currentTheme = theme==='system' ? systemTheme:theme
    useEffect(()=>setMouted(true),[])

  return (
    <div>
      {
        mounted && (currentTheme==='dark'? 
        <MdLightMode onClick={()=>setTheme('light')} 
        className='text-xl cursor-pointer 
                 hover:text-amber-500' /> : 
        <MdDarkMode onClick={()=>setTheme('dark')} 
        className='text-xl text-amber-500 cursor-pointer
                  hover:text-amber-900' />)
      }
    </div>
  )
}
