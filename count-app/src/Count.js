//import React from 'react';
import React, { useState } from 'react';

function Count(){
/*  const numState = useState(0);  // useState 가져오기(배열 반환), () = 초기값
    const number = numState[0];  // = useSatate의 현재 값이 들어가있는 곳
    const setNumber = numState[1];  // = setter 함수 */
    //구조분해 할당

    const [number, setNumber] = useState(0);  //[첫 번째 인덱스 값, 두 번째 인덱스 값] = 배열
    const add = () => setNumber(number+1);   //파라미터 = 업데이트하고 싶은 값 = 현재 값 +1
    const minus = () => setNumber(number-1);  //파라미터 = 업데이트하고 싶은 값 = 현재 값 -1
    const clear = () => setNumber(0);
    return (
        <div>
            <h2>Count</h2> 
            <div className="num">{number}</div> {/* 현재 값, setter 함수가 갱신한 값을 현재값에 넣음*/}
            <button onClick={add}>+1</button>
            <button onClick={minus}>-1</button>
            <button onClick={clear}>C</button>
        </div>
    )
}

export default Count;