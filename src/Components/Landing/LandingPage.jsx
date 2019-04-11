import React, { Component } from 'react';
import Sections from '../Sections';

class landingPage extends  Component {

  render(){
    const { localStorage } = this.props;
    console.log(localStorage);
    return(<Sections />);
  }
}
export  default  landingPage;
