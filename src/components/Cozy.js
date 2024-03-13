import React, { Component } from 'react'

export default class Cozy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [
        { id: 1,
          image: require("../images/about-1.png")},
        {id: 2,
         image: require("../images/about-3.png")},
      ],
      gallery2: [
        {id: 3,
          image: require("../images/about-2.png")},
         {id: 4,
          image: require("../images/about-4.png")}
      ]
    }
  }

  render() {
    return (
      <section className='cozy' id='cozy'>
        <div className='container'>
          <h4 className='cozy-title'>Resource is <i>the perfect and cozy place</i> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.</h4>
          <div className='cozy-gallery'>

          <div className='cozy-gallery-wrapper'>
            {this.state.gallery.map(item => {
              return (
                <div className='cozy-gallery-wrapper-inner' key={item.id}>
                  <img className='cozy-gallery-image' src={item.image} alt='gallery-img'/>
                </div>
              )
            })}
          </div>
              
          <div className='cozy-gallery-wrapper'>
            {this.state.gallery2.map(item2 => {
              return (
                <div className='cozy-gallery-wrapper-inner' key={item2.id}>
                  <img className='cozy-gallery-image' src={item2.image} alt='gallery-img'/>
                </div>
              )
            })}
          </div>
              

          </div>
        </div>
      </section>
    )
  }
}
