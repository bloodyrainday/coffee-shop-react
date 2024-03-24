import React from 'react';

class Video extends React.Component {
  render() {
    return (
      <video playsInline autoPlay muted loop preload='auto' className='background-video'>
        <source src={this.props.video} type="video/mp4"/>
      </video>
    )
  }
}

export default Video