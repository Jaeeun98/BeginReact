import React, {useRef, useState} from 'react';
import './App.css';
import Count from './Count';
import CreateUser from './CreateUser';
import Input from './Input'
import UseRefTest from './UseRefTest';

function App() {
  const [input, setInput] = useState({
    userName:'',
    email:''
  })
  const {userName, email} = input;
  const onChange = e => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name] : value
    })
  }
  const [users, setUsers] = useState([
    {
        id : 1,
        userName : "jaeeun",
        email : "jaeeun@naver.com"
    },
    {
        id : 2,
        userName : "jineun",
        email : "jineun@naver.com"
    },
    {
        id : 3,
        userName : "dubu",
        email : "jdubu@naver.com"
    }
])
const nextId = useRef(4);
const onCreate = () => {
  const user = {
    id : nextId.current,
    userName,
    email
  }

  setUsers([...users, user]);

  setInput({
    userName : '',
    email:'',
  })
  nextId.current += 1;
}
  return (
    <div className="App">
      <header>
        닉네임을 입력해 주세요.
        <Input />
      </header>

      <Count />
      <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate} />
      <UseRefTest users={users} />
      
    </div>
  );
}

export default App;
