import { useState } from 'react';
import Board from './Board';
import Button from './Button';

// 랜덤으로 숫자를 생성하는 함수
function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    // 자식 컴포넌트 state를 부모 컴포넌트로 올려주는 것 = state lifting
    const [num, setNum] = useState(1);  // 주사위 숫자
    const [sum, setSum] = useState(0);  // 총점
    const [gameHistory, setGameHistory] = useState([]);  // 게임 히스토리

    const [otherNum, setOtherNum] = useState(1);  // 주사위 숫자
    const [otherSum, setOtherSum] = useState(0);  // 총점
    const [otherGameHistory, setOtherGameHistory] = useState([]);  // 게임 히스토리

    // num state를 랜덤하게 변경하는 함수 (던지기)
    const handleRollClick = () => {
        const nextNum = random(6);
        const nextOtherNum = random(6);

        setNum(nextNum);
        setSum(sum + nextNum);  
        setGameHistory([...gameHistory, nextNum]);

        setOtherNum(nextOtherNum)
        setOtherSum(otherSum + nextOtherNum)
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    };

    // num state를 1로 변경하는 함수 (처음부터)
    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);

        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    };    

    return (
        <div>
        <div>
            <Button onClick = {handleRollClick}>던지기</Button>
            <Button onClick = {handleClearClick}>처음부터</Button>
        </div>
        <div>
          <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
          <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
        </div>
        </div>
    );
}

export default App;