import React from 'react';
import Image from './Image';
import leftSliderButton from '../icons/button-icon-left.svg';
import rightSliderButton from '../icons/button-icon-right.svg';
import slideImage from '../images/coffee-slider-1.png';

class Favorite extends React.Component {
  render() {
    return (
        <section className='favorite'>
          <div className='container'>

            <h3 className='favorite-title'>Choose your <i>favorite</i> coffee</h3>

            <div className='favorite-slider'>

              <div className='favorite-slider-button left'>
                <Image image={leftSliderButton}/>
              </div>

              <div className='favorite-slider-center'>
                <div className='favorite-slider-center-line'>

                  <div className='favorite-slider-center-line-slide'>
                    <Image image={slideImage}/>
                    <div className='favorite-slider-center-line-slide-desc'>
                      <h4 className='favorite-slider-center-line-slide-info-name'>S’mores Frappuccino</h4>
                      <p className='favorite-slider-center-line-slide-info-desc'>This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.</p>
                      <p className='favorite-slider-center-line-slide-info-price'>$5.50</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className='favorite-slider-button right'>
              <Image image={rightSliderButton}/>
              </div>

            </div>

            <div className='favorite-switch-wrapper'>
              <span className='favorite-switch'></span>
              <span className='favorite-switch'></span>
              <span className='favorite-switch'></span>
            </div>

          </div>
        </section>
    )
  }
}

export default Favorite