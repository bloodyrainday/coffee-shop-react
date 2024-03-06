import React from 'react';
import Header from './components/Header';
import Enjoy from './components/Enjoy';

class App extends React.Component {
  render() {
    return (
      <div className='wpapper'>
        <Header />
        <Enjoy />
      </div>
    )
  }
}

export default App