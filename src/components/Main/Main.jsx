import React from 'react';
import './Main.css';
import Stat from '../Statistic/Stat';
import Tags from '../Tag/Tags';
import Alerts from '../Alert/Alerts';
import Carousels from '../carousels/Carousels';
import Cards from '../Cards/Cards';

export default function Main() {
  return (
    <div className="MainPageBlock">
      <div className="blockStat">
        <Stat />
      </div>
      <div className="blockTag">
        <Tags />
      </div>
      <div className="blockAlerts">
        <Alerts />
      </div>
      <div className="blockCarousel">
        <Carousels />
      </div>
      <div className="blockCards">
        <Cards />
      </div>
    </div>
  );
}
