import Image from 'next/image';
import React from 'react';
import blog from '../assets/blog.jpg';
import weather from '../assets/weather.jpg';
import currency from '../assets/currency.jpg';
import login from '../assets/dict.jpg';
import cyber from '../assets/cyber.png';
import music from '../assets/music.jpg';

const Project = ({ dark }) => {
    const projects = [
        {
            id: 0,
            name: 'Weather App',
            link: 'https://heartfelt-squirrel-e3edcd.netlify.app/',
            size: 600,
            link_img: weather
        },
        {
            id: 1,
            name: 'Blog App',
            link: 'https://deluxe-tanuki-889eb0.netlify.app/',
            size: 601,
            link_img: blog
        },
        {
            id: 2,
            name: 'Currency Converter',
            link: 'https://musical-cucurucho-121071.netlify.app/',
            size: 602,
            link_img: currency
        },
        {
            id: 3,
            name: 'Dictonary App',
            link: 'https://main--leafy-sable-35c9bc.netlify.app/',
            size: 603,
            link_img: login
        },
        {
            id: 4,
            name: 'Cyberpunk App',
            link: 'https://courageous-cajeta-68877b.netlify.app/',
            size: 604,
            link_img: cyber
        },
        {
            id: 5,
            name: 'Music App',
            link: 'https://gilded-florentine-b76815.netlify.app/',
            size: 605,
            link_img: music
        },
    ];

    const handleOpenLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div name="project" className={`${dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'} h-screen w-full`}>
            <div className="mx-auto max-w-[1000px] p-4">
                <p className="text-4xl py-4 font-bold border-b-4 border-blue-500 mt-14">Projects</p>
                <p className="mt-4">
                    // These are the applications I've worked on. Below, you'll find detailed descriptions of each project:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-4 text-center py-8">
                    {projects.map(({ id, name, link, link_img }) => (
                        <div
                            className={` ${dark ? 'bg-zinc-300 text-zinc-700' : 'text-zinc-300 bg-zinc-700'} shadow-md shadow-[#040c16] bg-gray-700 md:hover:scale-105 duration-300 rounded-lg`}
                            key={id}
                            id={id}
                        >
                            <div className="w-full p-2" onClick={() => handleOpenLink(link)}>
                                <Image
                                    src={link_img}
                                    width={250}
                                    height={250}
                                    style={{ cursor: 'pointer' }}
                                    loading='lazy'
                                    className='rounded-lg'
                                    placeholder='blur'
                                />
                            </div>
                            <div className="text-base md:text-xl py-2 capitalize">{name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
