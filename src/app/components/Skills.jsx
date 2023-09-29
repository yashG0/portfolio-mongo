import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Image from 'next/image';
import Link from 'next/link';

const Skills = ({ dark }) => {

  const skills = [
    {
      id: 0,
      name: 'html',
      img_name: HTML,
      link: 'https://html.com/'
    },
    {
      id: 1,
      name: 'css',
      img_name: CSS,
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      id: 2,
      name: 'javascript',
      img_name: JavaScript,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      id: 3,
      name: 'react',
      img_name: ReactImg,
      link: 'https://react.dev/blog/2023/03/16/introducing-react-dev'
    },
    {
      id: 4,
      name: 'node',
      img_name: Node,
      link: 'https://nodejs.org/en/docs'
    },
    {
      id: 5,
      name: 'github',
      img_name: GitHub,
      link: 'https://github.com/yashG0'
    },
    {
      id: 6,
      name: 'tailwindcss',
      img_name: Tailwind,
      link: 'https://tailwindcss.com/docs'
    },
    {
      id: 7,
      name: 'mongodb',
      img_name: Mongo,
      link: 'https://www.mongodb.com/docs/'
    },
  ]

  return (
    <>
      <div name="skills" className={`${dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>

        {/* CONTAINER */}
        <div className='mx-auto max-w-[1000px] p-4 flex flex-col justify-center w-full h-screen '>
          <div className="">
            <p className='text-4xl py-4 font-bold border-b-4 border-blue-500'>Experience</p>
            <p className='py-4 '>// These are the Technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 text-center py-8">
            {
              skills.map(({ id, name, img_name, link }) => (
                <div className={`rounded-lg shadow-md cursor-pointer shadow-[#040c16] ${dark ? 'bg-zinc-300 text-zinc-700 ' : 'bg-zinc-700 text-zinc-300'}   md:hover:scale-105 duration-300`} id={id}>
                  <Link href={link}>
                    <Image src={img_name} height={100} width={100} loading='lazy' alt='htmlIcon' className='w-14 mx-auto sm:mt-4 mt-2' />
                    <p className='my-4 capitalize'> {name} </p>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
