import React from 'react';
import Header from './components/Header';
import Enjoy from './components/Enjoy';
import Favorite from './components/Favorite';
import menu from './icons/coffee-cup.svg';
import Cozy from './components/Cozy';
import Download from './components/Download';
import Footer from './components/Footer';

class App extends React.Component {
  
  render() {
    return (
      <div className='wpapper'>
        <Header />
        <Enjoy image={menu}/>
        <Favorite />
        <Cozy />
        <Download />
        <Footer />
      </div>
    )
  }
}

export default App