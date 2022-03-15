import React from 'react'

function Box(props) {
  return (
    <div className="s-box">
        <div className="s-b-img">
            <img src={props.image} alt={props.alt}/>
        </div>
        <div className="s-b-text">
            <p>This is what people who are good at
puzzles do. They ignore the heap of colors and shapes
and simply look for straight edges. They focus on
piecing together one tiny corner.</p>
<a href="#" className="cv-btn">{props.button}</a>
        </div>
    </div>
  )
}

export default Box