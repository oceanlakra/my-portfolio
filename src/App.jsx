import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './ui/Card'
import About from './components/About'


function App() {

  return (
    <div className='p-4'>
      <div className='pb-24'>
        <Navbar name='Ocean Lakra'/>
      </div>
      <h1 className="font-semibold font-mono mb-6 ml-4  text-4xl text-white">About Me</h1>
      <About words={['Ocean Lakra', 'an aspiring Web Developer', 'a Freelancer', 'a Computer Science Student', 'a Machine Learning Student']} />
      <h1 className="font-semibold font-mono mb-6 ml-4  text-4xl text-white">My Tech Stack</h1>
      <Carousel />
      <h1 className="font-semibold font-mono mt-6 mb-6 ml-4  text-4xl text-white">My Projects</h1>
      <Card />
    </div>
  )
}

export default App
