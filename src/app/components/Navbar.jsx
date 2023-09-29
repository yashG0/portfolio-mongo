import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { CgMoon, CgSun } from 'react-icons/cg';


const Navbar = ({ dark, setDark, nav, setNav }) => {

    const handleClick = () => setNav(!nav);

    const toggleDarkMode = () => {
        setDark(!dark)
    }

    const links = [

        {
            id: 0,
            name: 'home',
            to: 'hero',
        },
        {
            id: 1,
            name: 'about',
            to: 'about',
        },
        {
            id: 2,
            name: 'skill',
            to: 'skills',
        },
        {
            id: 3,
            name: 'projects',
            to: 'project',
        },
        {
            id: 4,
            name: 'social',
            to: 'social',
        },
        {
            id: 5,
            name: 'contact',
            to: 'contact',
        },
    ]

    const social_icons = [
        {
            id: 0,
            name: 'facebook',
            icon: <FaFacebook size={30} />,
            link: 'https://www.facebook.com/profile.php?id=100095157373972',
            color: 'bg-blue-700',
        },
        {
            id: 1,
            name: 'github',
            icon: <FaGithub size={30} />,
            link: 'https://github.com/yashG0',
            color: 'bg-gray-800',
        },
        {
            id: 2,
            name: 'linkedin',
            icon: <FaLinkedin size={30} />,
            link: 'https://www.linkedin.com/in/yash-gaurkar-a897b3228/',
            color: 'bg-blue-500',
        },
        {
            id: 3,
            name: 'resume',
            icon: <BsFillPersonLinesFill size={30} />,
            link: 'resume.pdf',
            color: 'bg-gray-600',
        },
    ]

    return (
        <>
            <div className={`fixed w-full h-[80px] shadow-sm flex justify-between items-center px-4 z-50 ${dark ? 'bg-gray-700 text-gray-200 shadow-gray-800' : 'shadow-gray-400 bg-gray-200 text-gray-700'}`}>
                <div className={`text-2xl sm:text-4xl font-bold  cursor-pointer`}>
                    {/* <Image src={Logo} alt='logo' width={180} height={180} /> */}
                    <Link to='hero' duration={400} smooth={true} className={`bg-gradient-to-tr  text-transparent bg-clip-text ${dark ? 'from-gray-500 to-blue-500' : 'from-gray-700 to-blue-800'}`}>
                        My Portfolio
                    </Link>
                </div>



                {/* MENU */}

                <ul className='hidden md:flex'>
                    {
                        links.map(({ id, name, to }) => (
                            id === 4 ? '' : (<li className='hover:text-blue-500 text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105' id={id}>
                                <Link to={to} smooth={true} duration={400} className='capitalize'>
                                    {name}
                                </Link>
                            </li>)

                        ))
                    }
                </ul>

                <div className={`right-0 top-24 ${dark ? 'text-gray-700 bg-gray-200' : 'text-gray-200 bg-gray-700'} absolute rounded-l-full  bg-black p-[6px] md:p-2  cursor-pointer`} onClick={toggleDarkMode}>{dark ? <CgSun /> : <CgMoon />}</div>


                {/* HAMBURGER */}
                <div className={`${dark ? 'text-gray-200' : 'text-gray-700'} md:hidden z-30 cursor-pointer `} onClick={handleClick}>
                    <div className={`w-6 h-[2.5px] my-1 ${dark ? 'text-slate-800 bg-slate-200' : 'bg-slate-800 text-slate-200'}  transition-all duration-100 ${nav ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                    <div className={`w-6 h-[2.5px] my-1 ${dark ? 'text-slate-800 bg-slate-200' : 'bg-slate-800 text-slate-200'}  transition-all duration-100 ${nav ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-[2.5px] my-1 ${dark ? 'text-slate-800 bg-slate-200' : 'bg-slate-800 text-slate-200'}  transition-all duration-100 ${nav ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>



                {/* SOCIAL ICONS */}
                <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        {
                            social_icons.map(({ id, name, icon, link, color }) => (

                                <li className={`rounded-r-lg w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${color} `} id={id}>
                                    <Link onClick={() => window.open(link, '_blank')} className=' capitalize flex justify-between items-center w-full text-gray-300 ' > {name} {icon} </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* MOBILE MENU */}

            {/* <ul className={`md:hidden ease-in-out fixed rounded-md duration-200 flex w-fit flex-col justify-center items-center h-fit ${nav ? 'top-20 right-10' : '-top-48 right-10 '} ${dark ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-gray-200'}`}>
                {
                    links.map(({ id, name, to }) => (
                        <li className='my-2 text-xl' id={id}>
                            <Link onClick={handleClick} to={to} smooth={true} duration={500} className='capitalize'>
                                {name}
                            </Link>
                        </li>
                    ))
                }
            </ul> */}
            <ul className={`md:hidden z-10 fixed h-[67px] w-full  ${nav ? 'top-20 duration-200' : 'hidden'} ${dark ? 'text-gray-200 bg-gray-600/60 backdrop-blur-md' : 'bg-gray-700/60 backdrop-blur-md text-gray-300'}`}>
                <div className='grid text-center grid-cols-3 h-full justify-center items-center'>
                    {
                        links.map(({ id, name, to }) => (
                            <li className='text-sm ' id={id}>
                                <Link onClick={handleClick} to={to} smooth={true} duration={500} className='capitalize font-semibold'>
                                    {name}
                                </Link>
                            </li>
                        ))
                    }
                </div>
            </ul>

        </>
    );
};

export default Navbar;
