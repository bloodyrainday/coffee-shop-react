import React from 'react';
import Video from './Video';
import background from '../video/background.mp4';
import { Link } from 'react-router-dom';

class Enjoy extends React.Component {
  render() {
    return (
        <section className='enjoy'>
          <div className='container'>

            <Video video={background}/>

            <div className='enjoy-offer'>
              <h1 className='enjoy-offer-title'><i color='#B0907A'>Enjoy</i> premium coffee at our charming cafe</h1>
              <p className='enjoy-offer-subtitle'>With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.</p>
              <Link to="/menu">
                <button className='enjoy-offer-button'>Menu<img src={this.props.image} alt='cup-of-coffee'/></button>
              </Link>
              
            </div>

          </div>
        </section>
    )
  }
}

export default Enjoy