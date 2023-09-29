import React from 'react';
import { data } from "../data/data.js";
import Link from 'next/link.js';

import workImg from '../assets/projects/workImg.jpeg';
import realEstate from '../assets/projects/realestate.jpg';

const Work = () => {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <>
      <div className='w-full  text-gray-300 md:h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-f2 font-bold inline border-b-4 text-gray-300 border-[#7CD795]'>Work</p>
            <p className='py-6 '>// Check out some of my Recent Work </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4' style={{backgroundImage:`url(${workImg})`}}>
            <div className='shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div '>

              {/* HOVER EFFECT */}
              <div >
                <span>

                </span>
                <div>
                  <Link href={'/'}><button></button> </Link>
                  <Link href={'/'}><button></button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
