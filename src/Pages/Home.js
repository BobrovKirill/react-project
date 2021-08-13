import React, { Component } from 'react';
import Wellcome from '../Components/Wellcome';
import About from '../Components/About';
import HomeFeedback from '../Components/HomeFeedback';

export default class Home extends Component {
  render() {
    return (
      <>
        <Wellcome />
        <About />
        <HomeFeedback />
      </>
    );
  }
}
