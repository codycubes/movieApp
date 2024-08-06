import React from 'react'
import './MainSec.css'
import {LMovies} from '../LMovies/LMovies'
import { LSeries } from '../LSeries/LSeries'


const MainSec = () => {
  return (
    <div>
        <div className='MainSec'>
            <div className='imgContainer'>
                <img src='onlyMurder.png' alt='Cover' />
            </div>

            <LMovies />
            <LSeries />
         
        </div>
      
    </div>
  )
}

export default MainSec
