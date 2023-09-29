import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaCodepen, FaHackerrank} from 'react-icons/fa';

const Social = ({ dark }) => {

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
            name: 'resume',
            icon: <BsFillPersonLinesFill size={30} />,
            link: 'resume.pdf',
            color: 'bg-gray-600',
        },
        {
            id: 3,
            name: 'linkedin',
            icon: <FaLinkedin size={30} />,
            link: 'https://www.linkedin.com/in/yash-gaurkar-a897b3228/',
            color: 'bg-blue-500',
        },
        {
            id: 4,
            name: 'Codepen',
            icon: <FaCodepen size={30} />,
            link: 'https://codepen.io/yashg0',
            color: 'bg-[rgb(30,48,80)]',
        },
        {
            id: 5,
            name: 'hackerrank',
            icon: <FaHackerrank size={30} />,
            link: 'https://www.hackerrank.com/yashgaurkar0?hr_r=1',
            color: 'bg-[rgb(20,28,80)]',
        },
    ]

    return (
        <>
            <div name="social" className={`sm:hidden ${dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                <div className='mx-auto max-w-[1000px] p-4 flex flex-col justify-center w-full h-screen'>

                    <div className="">
                        <p className='text-4xl py-4 font-bold border-b-4 border-blue-500'>Social Icons</p>
                        <p className='py-4 '>// These is my some Networks, Some social links</p>
                    </div>

                    <div className={`w-fit p-4 rounded-lg mx-auto ${dark ? 'bg-zinc-200' : 'bg-zinc-700 '} flex justify-center shadow-md shadow-[#040c16]`}>
                        <ul className='grid grid-cols-2 gap-6'>
                            {
                                social_icons.map(({ id, name, icon, link, color }) => (

                                    <li className={`${color} w-32 h-32 text-gray-200  rounded-lg`} id={id} target="_blank" rel="noopener noreferrer">
                                        <a href={link} className='w-full h-full flex justify-center items-center flex-col gap-2'>
                                            <span>{icon}</span>
                                            <span className='capitalize'>{name}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social