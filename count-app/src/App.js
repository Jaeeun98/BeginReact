import React from 'react';
import './App.css';
import Count from './Count';
import Input from './Input'
import UseRefTest from './UseRefTest';

function App() {
  return (
    <div className="App">
      <header>
        닉네임을 입력해 주세요.
        <Input />
      </header>

      <Count />

      <UseRefTest />
    </div>
  );
}

export default App;
