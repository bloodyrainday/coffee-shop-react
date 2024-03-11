import React from 'react';
import Header from './components/Header';
import Enjoy from './components/Enjoy';
import Favorite from './components/Favorite';
import menu from './icons/coffee-cup.svg';

class App extends React.Component {
  
  render() {
    return (
      <div className='wpapper'>
        <Header />
        <Enjoy image={menu}/>
        <Favorite />
      </div>
    )
  }
}

export default App