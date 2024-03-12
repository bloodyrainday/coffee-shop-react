import React from 'react'


class Slider extends React.Component {
  render() {
    return (
      <div className='slider-wrapper'>
        <img src={this.props.slider.img.default} alt='slider-img' />
        <div className='favorite-slider-center-line-slide-info'>
          <h4 className='favorite-slider-center-line-slide-info-name'>{this.props.slider.title}</h4>
          <p className='favorite-slider-center-line-slide-info-desc'>{this.props.slider.desc}</p>
          <p className='favorite-slider-center-line-slide-info-price'>{this.props.slider.price}</p>
        </div>
      </div>
    )
  }
}

export default Slider