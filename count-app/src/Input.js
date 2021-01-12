import React, {useState} from 'react';

function Input(){
    const [fullName, newName] = useState({
        firstName : '',
        lastName : ''  //두 개의 초기값 생성, 객체 형태로 관리
    })

    const { firstName, lastName } = fullName;  //현재 값(name)에 들어있는 객체를 구조분해할당으로 추출
    const handleChange = e => {
        //console.log(e.target.name); 
        //console.log(e.target.value); name과 value가 변경된 값으로 출력되는 것을 확인
        const {name, value} = e.target; //e.target = 이벤트가 전달된 객체에 대한 참조 → input 객체 참조(모든 요소는 객체) → 구조분해가능

        //newName(value) : 기존에는 ()안에 직접 값을 넣어서 업데이트 했음.
        //객체에서는 기존의 객체를 복사한 후 새 객체의 값을 변경해줘야 함.
        //불변성을 지켜줘야 리엑트가 컴포넌트의 상태가 없데이트 되었음을 감지할 수 있기 때문에
        //만일 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링 되지 않는다.
        newName({
            ...fullName, //newInput 객체에 기존 input객체 복사(spread)
            //name = value, name을 그대로 입력하면 name 자체의 값이 들어가게 됨
            //만일 대괄호를 입력하게 되면, 해당 객체가 어떤 것을 가리키냐에 따라 key 값이 변경된다.
            [name] : value
        })
        /* =
        const newInput = {
            ...fullName   
            [name] : value
        }
        newName(newInput);
        */
    }
    return(
        <div>
            {/* value를 지정해야 input 값도 같이 업데이트 됨*/}
            <input name="firstName" type="text" placeholder="your firstName plase" onChange={handleChange} value={firstName}/> 
            <input name="lastName" type="text" placeholder="your lastName plase" onChange={handleChange} value={lastName}/>
            <div>반갑습니다! {firstName} {lastName}님 </div>
        </div>
    )
}

export default Input;