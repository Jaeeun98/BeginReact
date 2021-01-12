import React, {useState} from 'react';

function Input(){
    const [name, newName] = useState({
        firstName : '',
        LastName : ''  //두 개의 초기값 생성.
    })

    const { firstName, LastName } = name;  //현재 값(name)에 들어있는 객체를 구조분해할당으로 추출

    

    const handleChange = e => {
        newName(e.target.value);
    }
    return(
        <div>
            {/* value를 지정해야 input 값도 같이 업데이트 됨*/}
            <input name="firstName" type="text" placeholder="your firstName plase" onChange={handleChange} value={name}/> 
            <input name="lastName"type="text" placeholder="your lastName plase"/>
            <div>반갑습니다! {name}님</div>
        </div>
    )
}

export default Input;