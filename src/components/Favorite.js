import React from 'react';
import Sliders from './Sliders';


class Favorite extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliders: [
        {
          id: 1,
          img: require("../images/coffee-slider-1.png"),
          title: 'S’mores Frappuccino',
          desc: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
          price: '$5.50'
        },

        {
          id: 2,
          img: require("../images/coffee-slider-2.png"),
          title: 'Caramel Macchiato',
          desc: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
          price: '$5.00'
        },

        {
          id: 3,
          img: require("../images/coffee-slider-3.png"),
          title: 'Ice coffee',
          desc: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
          price: '$4.50'
        }
      ]
    }
  }
  render() {
    
    return (
        <section className='favorite'>
          <div className='container'>

            <h3 className='favorite-title'>Choose your <i>favorite</i> coffee</h3>

            <div className='favorite-slider'>

              <div className='favorite-slider-button left'>
                <span className='arrow left'></span>
              </div>

              <div className='favorite-slider-center'>
                <div className='favorite-slider-center-line'>

                <Sliders sliders={this.state.sliders} />
                  {/*<div className='favorite-slider-center-line-slide'>
                    
                    <Image image={slideImage}/>
                    <div className='favorite-slider-center-line-slide-desc'>
                      <h4 className='favorite-slider-center-line-slide-info-name'>S’mores Frappuccino</h4>
                      <p className='favorite-slider-center-line-slide-info-desc'>This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.</p>
                      <p className='favorite-slider-center-line-slide-info-price'>$5.50</p>
                    </div>
                  </div>*/}

                </div>
              </div>

              <div className='favorite-slider-button right'>
                <span className='arrow right'></span>
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