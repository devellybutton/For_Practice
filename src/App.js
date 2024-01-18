import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';

// 랜덤으로 숫자를 생성하는 함수
function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    // 자식 컴포넌트 state를 부모 컴포넌트로 올려주는 것 = state lifting
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    // num state를 랜덤하게 변경하는 함수 (던지기)
    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    // num state를 1로 변경하는 함수 (처음부터)
    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    };    

    return (
        <div className="App">
        <div>
            <Button className="App-button" color="blue" onClick = {handleRollClick}>던지기</Button>
            <Button className="App-button" color="red" onClick = {handleClearClick}>처음부터</Button>
        </div>
        <div>
          <Board name="나" color="blue" gameHistory={myHistory}/>
          <Board name="상대" color="red" gameHistory={otherHistory}/>
        </div>
        </div>
    );
}

export default App;