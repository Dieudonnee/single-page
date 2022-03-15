import React from 'react'
import Box from './Box';
import image1 from '../images/s1.png'
import image2 from '../images/s2.png'

function Service() {
  return (
    <div id='services'>
       <div className='s-heading'>
       <h1>Services</h1>
       <p>hera are some Services of the software</p>
     </div>
     <div className='b-container'>
         <Box image={image1} alt={image1} button='Python'/>
         <Box image={image2} alt={image2} button='Javascript'/>
     </div>
    </div>
  )
}

export default Service