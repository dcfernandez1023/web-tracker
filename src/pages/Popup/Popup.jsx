import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const[url, setUrl] = useState("");

  useEffect(() => {
    getActiveTabUrl();
  }, []);

  const getActiveTabUrl = () => {
    const queryInfo = {active: true, currentWindow: true};
    chrome.tabs.query(queryInfo, (tabs) => {
      var currUrl = tabs[0].url;
      alert(currUrl);
      setUrl(currUrl);
    });
  }

  return (
    <div>
      <h3> web-tracker </h3>
      <br/>
      <p> Current Website: {url} </p>
    </div>
  );
};

export default Popup;
