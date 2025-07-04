'use client';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import menuIcon from '../../../public/ui/menu.svg';

type NavItem = {
  label: string;
  href: string;
  icon?: ReactNode;
};
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
type NavHandler = [boolean, (isOpen: boolean) => void];
const SideBar = () => {
  const OpenedSideBarContent = () => {
    return (
      <ul className="space-y-2 transition-all duration-300 ease-in-out shadow-lg">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex items-center px-4 py-3 rounded-lg transition-colors hover:bg-zinc-800"
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    )
  }
  const ClosedSideBarContent = () => {
    return (
      <ul>
        <li>
          <button onClick={() => navHandler(!isOpen)} className='p-2 hover:border rounded-lg transition-colors hover:bg-zinc-800'>
            <Image className='fill-white' src={menuIcon.src} alt='burguer icon menu' width={20} height={20}/>
          </button>
        </li>
      </ul>
    )
  }
  const navHandler = (state: boolean): void => {
    setIsOpen(state);
  }

  const [isOpen, setIsOpen]: NavHandler = useState(true);
  
  return (
    <aside className={`flex flex-col h-screen justify-center bg-zinc-900 text-white p-2 fixed top-0 left-0 ${!isOpen ? "w-48 opacity-100" : "w-auto"}`}>
      <nav >
        <ClosedSideBarContent/>
        {!isOpen && <OpenedSideBarContent/>}
      </nav>
    </aside>
  );
};

export default SideBar;
