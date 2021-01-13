import React, {useRef} from 'react';  //useRef 가져오기


function UseRefTest(){
    const use = useRef();
    const users = [
        {
            id : 1,
            name : "jaeeun",
            age : 25,
        },
        {
            id : 2,
            name : "jineun",
            age : 22,
        },
        {
            id : 3,
            name : "dubu",
            age : 7,
        }
    ]
    const handleClick = () => use.current.focus();
    return (
        <div>
            {users.map(item => (
              <div>
                  <span>{item.id}, </span>
                  <span>{item.name}, </span>
                  <span>{item.age}</span>    
              </div>
            ))}
            <button onClick={handleClick}>F</button>
            <input type="text" ref={use}/>
        </div>
        
    )
}

export default UseRefTest;