import React from 'react';
import './setting.css';
import Settings from '@material-ui/icons/SettingsOutlined'

function setting() {

const openSettings = () => {
  alert("Open Settings")
}

  return (
    <Settings className="setting" onClick={openSettings}/>
  );
}

export default setting;