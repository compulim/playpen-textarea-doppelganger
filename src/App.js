import React from 'react';

import './App.css';
import AutoResizeTextArea from './AutoResizeTextArea';

export default function App() {
  return (
    <div className="app">
      <button className="app__button" type="button">
        <span role="img" aria-label="upload">
          📁
        </span>
      </button>
      <AutoResizeTextArea className="app__text-box" />
      <button className="app__button" type="button">
        <span role="img" aria-label="send">
          📩
        </span>
      </button>
    </div>
  );
}
