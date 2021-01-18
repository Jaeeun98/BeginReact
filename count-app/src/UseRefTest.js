import React, {useRef} from 'react';  //useRef 가져오기


function UseRefTest({users}){  //props 비구조화 할당
    const use = useRef();
    const handleClick = () => use.current.focus();
    return (
        <div>
            {users.map(item => (
              <div>
                  <span>{item.id}, </span>
                  <span>{item.userName}, </span>
                  <span>{item.email}</span>    
              </div>
            ))}
            <button onClick={handleClick}>F</button>
            <input type="text" ref={use}/>
        </div>
        
    )
}

export default UseRefTest;