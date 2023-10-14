import React from 'react'
import Link from 'next/link'
import { BiPhotoAlbum } from "react-icons/bi"

function Header() {
  return (
    <header>
      <div className='fixed top-0 w-full flex items-center justify-between bg-slate-500 h-16 px-40 text-gray-100'>
        <Link href='/' className='flex items-center gap-8 text-2xl'>
          <BiPhotoAlbum/>
        </Link>
        <nav className='flex gap-40'>
          <Link href="/users" className='hover:text-slate-900'>Rockers</Link>
          <Link href="/albums" className='hover:text-slate-900'>Albums</Link>
          <Link href="/about" className='hover:text-slate-900'>About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header