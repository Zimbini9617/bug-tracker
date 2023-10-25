import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
  <nav className='flex space-x-10 px-10 border-b border-spacing-2 h-14 mb-5 items-center'>
    <Link href='/'>Logo</Link>

    <ul className='flex space-x-10'>
      <li>
        <Link href='/'>Dashboard</Link>
      </li>
      <li>
        <Link href='bugs'>Bugs</Link>
      </li>
    </ul>
  </nav>
    
  )
}

export default NavBar