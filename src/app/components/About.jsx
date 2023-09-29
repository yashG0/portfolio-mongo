import React from 'react';

const About = ({dark}) => {
  return (
    <>
      <div name='about' className={`${dark?'bg-gray-700 text-gray-200':'bg-gray-200 text-gray-700'} font-f1`}>
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4 '>
              <p className='text-4xl font-bold inline border-b-4 border-blue-500'>About</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold '>
              <p className=''>Hi, I'm Freelancer, nice to meet you, please take a look around</p>
            </div>
            <div>
              <p>Hello, I'm Yash Gaurkar, a passionate Full Stack Developer with a strong foundation in computer science and a BCA degree. I've embarked on an exciting journey in the world of web development, where I strive to turn ideas into interactive and user-friendly web experiences.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
