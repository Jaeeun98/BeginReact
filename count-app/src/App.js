import React from 'react';
import './App.css';
import Count from './Count';
import Input from './Input'

function App() {
  return (
    <div className="App">
      <header>
        닉네임을 입력해 주세요.
        <Input />
      </header>

      <Count />
    </div>
  );
}

export default App;
