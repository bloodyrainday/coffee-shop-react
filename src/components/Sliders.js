import React from 'react'
import Slider from './Slider'

class Sliders extends React.Component {
  render() {
    return (
      <div className='favorite-slider-center-line-slide'>
        {this.props.sliders.map((slide) => (
          <Slider slider={slide} key={slide.id}/>
        )
        )}
      </div>
    )
  }
}

export default Sliders