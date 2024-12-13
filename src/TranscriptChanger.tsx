import { useState } from "react";
import { ScoreItem } from "./type";

export const TranscriptChanger = ({ value, onChange }: { value: ScoreItem[], onChange: (value: ScoreItem[]) => void }) => {
  const [selectedName, setSelectedName] = useState<string>("张三");
  const [score, setScore] = useState<number>();

  const handleScoreChange = () => {
    onChange(value.map((item) => {
      if (item.name === selectedName && score !== undefined) {
        return { ...item, score };
      }
      return item;
    }));
  };

  return <div style={{ marginBottom: 12 }}>
    <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
      {
        value.map((item) => {
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
