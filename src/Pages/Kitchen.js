import React, { Component } from 'react';
import Portfolio from '../Components/Portfolio';

import riva1 from '../assets/kitchen/riva/1.png';
import riva2 from '../assets/kitchen/riva/11.jpg';
import riva3 from '../assets/kitchen/riva/12.jpg';
import speed1 from '../assets/kitchen/speed/1.png';
import speed2 from '../assets/kitchen/speed/7.jpg';
import speed3 from '../assets/kitchen/speed/9.jpg';
import structura1 from '../assets/kitchen/structura/1.png';
import structura2 from '../assets/kitchen/structura/8.jpg';
import structura3 from '../assets/kitchen/structura/10.jpg';
import sylt1 from '../assets/kitchen/sylt/1.png';
import sylt2 from '../assets/kitchen/sylt/7.jpg';
import sylt3 from '../assets/kitchen/sylt/11.jpg';

const kitchen = [
  {
    id: 1,
    model: 'riva',
    items: [
      { id: 1, url: riva1 },
      { id: 2, url: riva2 },
      { id: 3, url: riva3 },
    ],
  },
  {
    id: 2,
    model: 'speed',
    items: [
      { id: 1, url: speed1 },
      { id: 2, url: speed2 },
      { id: 3, url: speed3 },
    ],
  },
  {
    id: 3,
    model: 'structura',
    items: [
      { id: 1, url: structura1 },
      { id: 2, url: structura2 },
      { id: 3, url: structura3 },
    ],
  },
  {
    id: 4,
    model: 'sylt',
    items: [
      { id: 1, url: sylt1 },
      { id: 2, url: sylt2 },
      { id: 3, url: sylt3 },
    ],
  },
];

export default class Kitchen extends Component {
  render() {
    return (
      <div className="main-content pt-5">
        <Portfolio dates={kitchen} />
      </div>
    );
  }
}
