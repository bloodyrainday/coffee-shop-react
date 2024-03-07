import React from 'react';
import Header from './components/Header';
import Enjoy from './components/Enjoy';
import menu from './icons/coffee-cup.svg';

class App extends React.Component {
  render() {
    return (
      <div className='wpapper'>
        <Header />
        <Enjoy image={menu}/>
      </div>
    )
  }
}

export default App