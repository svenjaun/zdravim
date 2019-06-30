import React from 'react';
import './App.css';
import ExcuseComponent from './components/excuse/excuse';
import MessageComponent from './components/message/message';
import SearchComponent from './components/search/search';
import ShortcutsComponent from './components/shortcuts/shortcuts';
import TemperatureComponent from './components/temperature/temperature';
import TimeComponent from './components/time/time';
import WeatherComponent from './components/weather/weather';
import SettingsComponent from './components/setting/setting';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="column"><ExcuseComponent /></div>
        <div className="column"><MessageComponent /></div>
        <div className="column"><ShortcutsComponent /></div>
      </div>
      <div className="row">
      <div className="column"></div>
      <div className="column searchcolumn"><SearchComponent /><SettingsComponent /></div>
      <div className="column settingcolumn"></div>
        </div>
      <div className="row">
        <div className="column"><TemperatureComponent /></div>
        <div className="column"><TimeComponent /></div>
        <div className="column"><WeatherComponent /></div>
      </div>
    </div>
  );
}

export default App;