import React from 'react';  //react 가져오기, jsx 사용하기 위해 
import ReactDOM from 'react-dom';  //react-dom 가져오기, render 메서드를 통해 dom노드를 jsx로 바꿔줌
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(      //브라우저에 있는 실제 Dom 내부에 리액트 컴포넌트를 렌더링
  <React.StrictMode>  {/*화면에 표시할 jsx, 렌더링 결과물*/}
    <App />
  </React.StrictMode>,
  document.getElementById('root') /*html 상에서 react 앱이 들어갈 위치 = #root*/
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
