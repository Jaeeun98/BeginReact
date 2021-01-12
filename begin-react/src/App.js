import React from 'react';  //react 가져오기
import Hello from './Hello';  //hello 컴포넌트 가져오기
import './App.css';

function App() {  //app 컴포넌트 만들기
  const family = [
    {
        name : "Jaeeun",
        age : 25,
        gender : "female",
        height : 167,
        favFood : "chicken"
    },
    {
        name : "Jineun",
        age : 21,
        gender : "female",
        height: 159,
        favFood : "meat"
    },
    {
        name : "dubu",
        age : 7,
        gender : "male",
        height: 40,
        favFood : "snack"
    }
]

  return (
    //jsx에서 js를 사용할떄 {} 사용 → jsx 밖에서는 {} 사용x
    //family = 배열, 인수를 부여해야 함.
    //여기서 map은 List를 한 번에 출력하기 위한 것 → 객체만 따로 쓸일x, 배열 사용
    //map(function(인수 = 배열[i], 인덱스, 호출배열), this)
    //배열[i] = family 안에 있는 객체 1개씩
    //배열[0] = family[0] = jaeeun 객체 전부
    //배열에 key 안넣으면 오류남, 보통 obejctID를 만들어서 부여
    <div>

    <Hello isSpaecial>
    {/*= name ={family}, family 객체를 보내고 Hello 컴포넌트에서 map */}
    {family.map(item => ( 
      <div key={item.name}>
        <div>name : {item.name}</div> {/*= family 배열의 jaeeun.name*/}
        <div>age : {item.age}</div>
        <div>gender : {item.gender}</div>
        <div>height : {item.height}</div>
        <div>favFood : {item.favFood}</div>
        <hr />
      </div>  
    ))}
    </Hello>
    
    </div>
  )
}
/*
const Welcome = props => (
  props.name.map(item => (
    <div key={item.objectId}>
    <span>{item.name}</span>
    <span>{item.age}</span>
    <span>{item.gender}</span>
    <span>{item.height}</span>
  </div> 
  ))
)

//List를 function 밖에 만들었으면 props를 사용하지 않아도 됨.  
const List = () => list.map(item => (
  <div key={item.objectId}>
    <span>{item.name}</span>
    <span>{item.age}</span>
    <span>{item.gender}</span>
    <span>{item.height}</span>
  </div> 
));
*/

export default App;
