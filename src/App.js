import "./App.css";
import { useState } from "react";

function App() {
    const [stage, setStage] = useState(0); // 단계 State
    const onClick = () => {
        if (stage >= 20) {
            alert("그만~");
            return;
        }
        setStage(stage + 1);
    };
    let topPart = []; // 윗부분
    let bottomPart = []; // 아랫부분
    for (let i = 0; i < stage; i++) {
        let topLeading = ""; // 좌상부
        let topTrailing = ""; // 우상부
        let bottomLeading = ""; // 좌하부
        let bottomTrailing = ""; // 우하부
        for (let j = 0; j < stage; j++) {
            if (i <= j) {
                topLeading += "⭐️";
            } else {
                topLeading += "🧮";
            }
            if (i + j > stage - 2) {
                topTrailing += "⭐️";
            } else {
                topTrailing += "🧮";
            }
            if (i + j < stage) {
                bottomLeading += "⭐️";
            } else {
                bottomLeading += "🧮";
            }
            if (i >= j) {
                bottomTrailing += "⭐️";
            } else {
                bottomTrailing += "🧮";
            }
        }
        topPart.push(<p>{topLeading + topTrailing}</p>);
        bottomPart.push(<p>{bottomLeading + bottomTrailing}</p>);
    }
    return (
        <div className="App">
            <input type="button" value={stage + "+"} onClick={onClick} />
            <div>
                {topPart}
                {bottomPart}
            </div>
        </div>
    );
}

export default App;
