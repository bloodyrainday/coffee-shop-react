import React, { Component } from 'react';
import Enjoy from '../components/Enjoy';
import Favorite from '../components/Favorite';
import menu from '../icons/coffee-cup.svg';
import Cozy from '../components/Cozy';
import Download from '../components/Download';

export default class Home extends Component {
  render() {
    return (
      <>
        <Enjoy image={menu}/>
        <Favorite />
        <Cozy />
        <Download />
      </>
    )
  }
}
