'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { usePathname } from 'next/navigation'
import useThemeSwitcher from './hooks/useThemeSwitcher';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

const CustomLink = ({ href, title, className = "" }) => {
  const router = usePathname()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] flex bg-black dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router===href?'w-full':'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {
  const [mode,setmode] = useThemeSwitcher()
  return (
    <header className='w-full font-medium dark:text-white px-32 py-2 flex justify-between items-center'>
      <nav className='flex gap-6'>
        <CustomLink title="Home" href='/'/>
        <CustomLink title="About" href='/about'/>
        <CustomLink title="Projects" href='/projects'/>
      </nav>
      <h2><Logo /></h2>
      <nav className='flex gap-6'>
        <Link href='https://www.linkedin.com/in/abulfaz-sadigov1/' target='_blank'><AiFillLinkedin className="inline mb-1 mr-1"/>Linkedin</Link>
        <Link href='https://github.com/EbulfezSadigov' target='_blank'><AiFillGithub className="inline mb-1 mr-1"/>Github</Link>
        <Link href='https://gitlab.com/abulfazs' target='_blank'><AiFillGitlab className="inline mb-1 mr-1"/>Gitlab</Link>

        <button className='ml-3 flex items-center justify-center rounded-full' onClick={()=>setmode(mode==="light"?"dark":"light")}>
          {
            mode==="dark"?
            <SunIcon/>:<MoonIcon/>
          }
        </button>
      </nav>
    </header>
  )
}

export default Navbar