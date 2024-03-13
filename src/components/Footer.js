import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>

          <div className='footer-column1'>
            <h4 className='footer-column1-title'>Sip, Savor, Smile. <i>It’s coffee time!</i></h4>
            <div className='footer-column1-icons'>
              <span className='footer-column1-icons-twit'></span>
              <span className='footer-column1-icons-inst'></span>
              <span className='footer-column1-icons-fcb'></span>
            </div>
          </div>

          <div className='footer-column2'>
            <p className='footer-column2-text'>Contact us</p>
            <ul className='footer-column2-list'>
              <li className='footer-column2-list-item'><span className='footer-column2-list-item-address'></span><a href='https://www.google.com/maps/search/8558+Green+Rd.,++LA/@30.8296073,-96.6917553,6z/data=!3m1!4b1?entry=ttu'>8558 Green Rd.,  LA</a></li>
              <li className='footer-column2-list-item'><span className='footer-column2-list-item-phone'></span><a href='tel:+1(603)555-0123'>+1 (603) 555-0123</a></li>
              <li className='footer-column2-list-item'><span className='footer-column2-list-item-time'></span><a href='##'>Mon-Sat: 9:00 AM – 23:00 PM</a></li>
            </ul>
          </div>

        </div>
      </footer>
    )
  }
}
