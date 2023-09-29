'use client'

import { useState } from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Social from './components/Social';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


export default function Home() {
  const [dark, setDark] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} nav={nav} setNav={setNav} />
      <div className='' onClick={() => setNav(false)}>
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Project dark={dark} />
        <Social dark={dark} />
        <Contact dark={dark} />
      </div>
    </>
  )
}
