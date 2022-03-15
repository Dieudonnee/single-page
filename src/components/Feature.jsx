import React from 'react'
import featureImage from '../images/Frame 19.png'

function Feature() {
  return (
    <div id="features">
    <span className="f-span">
    <div className='f-heading'>
       <h1>Features</h1>
       <p>hera are some features of the software</p>
     </div>
     </span>
    <div className="features-model">
      <img src={featureImage} alt='feature-image'/>
      </div>
      <div className="features-text">
          <h2>Features</h2>
          <h3>This Application <span>software</span>is art</h3>
          <p>This is what people who are good at
puzzles do. They ignore the heap of colors and shapes
and simply look for straight edges. They focus on
piecing together one tiny corner.</p>
          <button>View more</button>
      </div>
    </div>

  )
}

export default Feature