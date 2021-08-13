import React, { Component } from 'react';
import Portfolio from '../Components/Portfolio';

import eleso1 from '../assets/design/eleso/1.jpg';
import eleso2 from '../assets/design/eleso/2.jpg';
import eleso3 from '../assets/design/eleso/3.jpg';
import eleso4 from '../assets/design/eleso/4.jpg';
import eleso5 from '../assets/design/eleso/5.jpg';
import eleso6 from '../assets/design/eleso/6.jpg';
import eleso7 from '../assets/design/eleso/7.jpg';
import eleso8 from '../assets/design/eleso/8.jpg';
import eleso9 from '../assets/design/eleso/9.jpg';
import eleso10 from '../assets/design/eleso/10.jpg';
import eleso11 from '../assets/design/eleso/11.jpg';

import taraskin1 from '../assets/design/taraskin/1.jpg';
import taraskin2 from '../assets/design/taraskin/2.jpg';
import taraskin3 from '../assets/design/taraskin/3.jpg';
import taraskin4 from '../assets/design/taraskin/4.jpg';
import taraskin5 from '../assets/design/taraskin/5.jpg';
import taraskin6 from '../assets/design/taraskin/6.jpg';
import taraskin7 from '../assets/design/taraskin/7.jpg';
import taraskin8 from '../assets/design/taraskin/8.jpg';
import taraskin9 from '../assets/design/taraskin/9.jpg';
import taraskin10 from '../assets/design/taraskin/10.jpg';
import taraskin11 from '../assets/design/taraskin/11.jpg';
import taraskin12 from '../assets/design/taraskin/12.jpg';
import taraskin13 from '../assets/design/taraskin/13.jpg';
import taraskin14 from '../assets/design/taraskin/14.jpg';
import taraskin15 from '../assets/design/taraskin/15.jpg';
import taraskin16 from '../assets/design/taraskin/16.jpg';
import taraskin17 from '../assets/design/taraskin/17.jpg';
import taraskin18 from '../assets/design/taraskin/18.jpg';
import taraskin19 from '../assets/design/taraskin/19.jpg';
import taraskin20 from '../assets/design/taraskin/20.jpg';
import taraskin21 from '../assets/design/taraskin/21.jpg';
import taraskin22 from '../assets/design/taraskin/22.jpg';
import taraskin23 from '../assets/design/taraskin/23.jpg';
import taraskin24 from '../assets/design/taraskin/24.jpg';
import taraskin25 from '../assets/design/taraskin/25.jpg';
import taraskin26 from '../assets/design/taraskin/26.jpg';
import taraskin27 from '../assets/design/taraskin/27.jpg';

import prokofeva1 from '../assets/design/prokofeva/1.jpg';
import prokofeva2 from '../assets/design/prokofeva/2.jpg';
import prokofeva3 from '../assets/design/prokofeva/3.jpg';
import prokofeva4 from '../assets/design/prokofeva/4.jpg';
import prokofeva5 from '../assets/design/prokofeva/5.jpg';
import prokofeva6 from '../assets/design/prokofeva/6.jpg';
import prokofeva7 from '../assets/design/prokofeva/7.jpg';
import prokofeva8 from '../assets/design/prokofeva/8.jpg';
import prokofeva9 from '../assets/design/prokofeva/9.jpg';
import prokofeva10 from '../assets/design/prokofeva/10.jpg';
import prokofeva11 from '../assets/design/prokofeva/11.jpg';
import prokofeva12 from '../assets/design/prokofeva/12.jpg';
import prokofeva13 from '../assets/design/prokofeva/13.jpg';
import prokofeva14 from '../assets/design/prokofeva/14.jpg';

import piter1 from '../assets/design/piter/1.jpg';
import piter2 from '../assets/design/piter/2.jpg';
import piter3 from '../assets/design/piter/3.jpg';
import piter4 from '../assets/design/piter/4.jpg';

const design = [
  {
    id: 1,
    model: 'Дом с баней',
    items: [
      { id: 1, url: eleso1 },
      { id: 2, url: eleso2 },
      { id: 3, url: eleso3 },
      { id: 4, url: eleso4 },
      { id: 5, url: eleso5 },
      { id: 6, url: eleso6 },
      { id: 7, url: eleso7 },
      { id: 8, url: eleso8 },
      { id: 9, url: eleso9 },
      { id: 10, url: eleso10 },
      { id: 11, url: eleso11 },
    ],
  },
  {
    id: 2,
    model: 'Дом двухэтажный',
    items: [
      { id: 1, url: taraskin1 },
      { id: 2, url: taraskin2 },
      { id: 3, url: taraskin3 },
      { id: 4, url: taraskin4 },
      { id: 5, url: taraskin5 },
      { id: 6, url: taraskin6 },
      { id: 7, url: taraskin7 },
      { id: 8, url: taraskin8 },
      { id: 9, url: taraskin9 },
      { id: 10, url: taraskin10 },
      { id: 11, url: taraskin11 },
      { id: 12, url: taraskin12 },
      { id: 13, url: taraskin13 },
      { id: 14, url: taraskin14 },
      { id: 15, url: taraskin15 },
      { id: 16, url: taraskin16 },
      { id: 17, url: taraskin17 },
      { id: 18, url: taraskin18 },
      { id: 19, url: taraskin19 },
      { id: 20, url: taraskin20 },
      { id: 21, url: taraskin21 },
      { id: 22, url: taraskin22 },
      { id: 23, url: taraskin23 },
      { id: 24, url: taraskin24 },
      { id: 25, url: taraskin25 },
      { id: 26, url: taraskin26 },
      { id: 27, url: taraskin27 },
    ],
  },
  {
    id: 3,
    model: 'Однакомнатная квартира в Москве',
    items: [
      { id: 1, url: prokofeva1 },
      { id: 2, url: prokofeva2 },
      { id: 3, url: prokofeva3 },
      { id: 4, url: prokofeva4 },
      { id: 5, url: prokofeva5 },
      { id: 6, url: prokofeva6 },
      { id: 7, url: prokofeva7 },
      { id: 8, url: prokofeva8 },
      { id: 9, url: prokofeva9 },
      { id: 10, url: prokofeva10 },
      { id: 11, url: prokofeva11 },
      { id: 12, url: prokofeva12 },
      { id: 13, url: prokofeva13 },
      { id: 14, url: prokofeva14 },
    ],
  },
  {
    id: 4,
    model: 'Однакомнатная квартира в Питербурге',
    items: [
      { id: 1, url: piter1 },
      { id: 2, url: piter2 },
      { id: 3, url: piter3 },
      { id: 4, url: piter4 },
    ],
  },
];

export default class Design extends Component {
  render() {
    return (
      <div className="main-content pt-5">
        <Portfolio dates={design} />
      </div>
    );
  }
}
