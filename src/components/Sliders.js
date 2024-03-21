import React, { useState } from 'react'
import Slider from './Slider'


const Sliders = ({sliders}) => {

  const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
      if (newIndex < 0) {
        newIndex = sliders.length - 1;
      } else if (newIndex >= sliders.length) {
        newIndex = 0
      }
      setActiveIndex(newIndex)
    }

  /* swipe start */

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleMoveStart, false);

  let x1 = null;
  
  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
  }

  function handleMoveStart(event) {
    if (!x1) return false;
    let x2 = event.touches[0].clientX;
    let differenceX = x2 - x1;
  
    if (differenceX > 0) {
      console.log(Math.abs(differenceX))
      updateIndex(activeIndex - 1);
    } else {
      updateIndex(activeIndex + 1);
    }
    
    x1 = null
  }

  /* swipe end */

    return (
      <div className='favorite-slider'>

        <div className='favorite-slider-button left'>
          <span className='arrow left' onClick={() => {updateIndex(activeIndex - 1)}}></span>
        </div>


        <div className='favorite-slider-center'>
          <div className='favorite-slider-center-line' style={{transform: `translate(-${activeIndex * 100}%)`}}>
            <div className='favorite-slider-center-line-slide'>
              {sliders.map((slide) => (
                <Slider slider={slide} key={slide.id}/>
              )
              )}
            </div>
          </div>

          <div className='favorite-switch-wrapper'>
            {sliders.map((item, index) => (
              <span className={`favorite-switch ${index === activeIndex ? 'active' : ''}`} key={item.id}></span>
            ))}
          </div>
          
        </div>
        
        <div className='favorite-slider-button right'>
              <span className='arrow right' onClick={() => {updateIndex(activeIndex + 1)}}></span>
        </div>

      </div>

    )
}

export default Sliders