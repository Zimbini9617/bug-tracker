'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {AiFillBug} from 'react-icons/ai';
import classnames from 'classnames';


const NavBar = () => {
  const pathname = usePathname();
  
  const links = [
    {id:1, href:'/', label:'Dashboard'},
    {id:2, href:'/bugs', label:'Bugs'},
    {id:3, href:'https://cloud.mongodb.com/v2/653a5362dda6784ed197582f#/metrics/replicaSet/653a56106153ff132ed48309/explorer/bugtracker/Bug/find', label:'MongoDB'}
  ];
  return (
  <nav className='flex space-x-10 px-5 border-b h-14 mb-10 items-center transition-colors'>
    <Link href='/'>
      <AiFillBug className='text-3xl text-gray-700 hover:text-gray-400'/>
    </Link>

    <ul className='flex space-x-10'>
      {links.map((link)=>(
        <Link 
        href={link.href} 
        key={link.id} 
        className={classnames({
          'text-zinc-800': link.href === pathname,
          'text-zinc-500': link.href !== pathname,
          'hover:text-zinc-400 transition-colors': true,
        })}>{link.label}
        </Link>
      ))}
   
    </ul>
  </nav>
    
  )
}

export default NavBar