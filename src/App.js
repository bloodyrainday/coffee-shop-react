import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

class App extends React.Component {
  
  render() {
    return (
      <div className='wpapper'>
        <Header />
        <Routes>
          <Route path="/coffee-shop-react" element={<Home/>}/>
          <Route path="/coffee-shop-react/menu" element={<Menu/>}/>
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App