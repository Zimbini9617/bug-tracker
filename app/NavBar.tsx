import React from 'react';
import Link from 'next/link';
import {AiFillBug} from 'react-icons/ai';

const NavBar = () => {
  const links = [
    {id:1, href:'/', label:'Dashboard'},
    {id:1, href:'/bugs', label:'Bugs'}
  ];
  return (
  <nav className='flex space-x-10 px-5 border-b h-14 mb-10 items-center transition-colors'>
    <Link href='/'>
      <AiFillBug className='text-3xl text-gray-700 hover:text-gray-400'/>
    </Link>

    <ul className='flex space-x-10'>
      {links.map((link)=>(
        <Link href={link.href} key={link.id} className='text-zinc-400 hover:text-zinc-900'>{link.label}</Link>
      ))}
   
    </ul>
  </nav>
    
  )
}

export default NavBar