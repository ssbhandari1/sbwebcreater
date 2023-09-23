import React from 'react'
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import ContendWrapper from '../contentwrapper/ContendWrapper';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
{
  technologies.map((tech)=>(
    <div className='w-28 h-28 ' key={tech.name}>
      <BallCanvas icon={tech.icon}/>

    </div>
  ))
}

    </div>
  )
}

export default ContendWrapper(Tech,'')