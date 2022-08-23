import React from 'react'
import './index.css'

export default function Navbar (){
    return (
        <nav className='bg-[#F55A5A] flex justify-center items-center py-3 rounded-t-lg space-x-2'>
            <i class="fa-solid fa-globe text-sky-100"></i>
            <p className="text-sky-100 font-bold text-sm">my travel journey</p>
        </nav>
    )
}