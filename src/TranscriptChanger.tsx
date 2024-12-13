import { useState } from "react";
import { Store } from "./store";

export const TranscriptChanger = ({ store  }: {store: Store} ) => {
  const [selectedName, setSelectedName] = useState<string>("张三");
  const [score, setScore] = useState<number>();

  const handleScoreChange = () => {
    if(score) {
      store.updateScore(selectedName, score);
    }
  };

  return <div style={{ marginBottom: 12 }}>
    <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
      {
        store.transcript.map((item) => {
          return <option key={item.name} value={item.name}>{item.name}</option>;
        })
      }
    </select>
    <input
      type="text"
      placeholder="请输入分数"
      value={score}
      onChange={(e) => setScore(Number(e.target.value))}
    />
    <button onClick={handleScoreChange}>修改</button>
  </div>;
};
