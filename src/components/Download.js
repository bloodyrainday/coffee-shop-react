import React, { Component } from 'react';
import mobile from "../images/mobile-screens.png"

export default class Download extends Component {
  render() {
    return (
      <section className='download'>
        <div className='container'>

          <div className='download-column1'>
            <h4 className='download-column1-title'><i>Download</i> our apps to start ordering</h4>
            <p className='download-column1-desc'>Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are</p>
            
            <div className='download-column1-buttons'>
              <span className='download-column1-button-apple'></span>
              <span className='download-column1-button-google'></span>
            </div>
          </div>

          <div className='download-column2'>
            <img src={mobile} alt='app-img'/>
          </div>

        </div>
      </section>
    )
  }
}
