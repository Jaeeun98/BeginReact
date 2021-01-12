import React from 'react';  //react 불러오기

function Hello(props){
    
    const handleClick  = event => (
        //value는 있는 요소가 있고 아닌 요소가 있음(input은 o)
        event.target.style.color = "red"
    )
    
    return (
        <div>
            <div onClick={handleClick}>Jaeeun, Family</div>
            <hr />
            {/*<div>{props.name}</div>*/}
            <div>{props.children}</div>
            <div>{props.isSpaecial ? <b>true</b> : <b>false</b>}</div>
            <hr />
        </div>
    ) 
}
/*
Hello.defaultProps = {
    name : "jaeeun"
}
*/
export default Hello;  //hello 컴포넌트 내보내기