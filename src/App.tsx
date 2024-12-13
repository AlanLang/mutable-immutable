import { useState } from 'react';
import { Transcript } from './TranscriptView';
import { ScoreItem } from './type';

export const App = () => {
  const [selectedName, setSelectedName] = useState<string>("张三");
  const [score, setScore] = useState<number>();
  const [transcript, setTranscript] = useState<ScoreItem[]>([
    { name: '张三', score: 80 },
    { name: '李四', score: 90 },
    { name: '王五', score: 78 },
  ]);

  const handleScoreChange = () => {
    setTranscript(transcript.map((item) => {
      if (item.name === selectedName && score !== undefined) {
        return { ...item, score };
      }
      return item;
    }));
  };

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
          {
            transcript.map((item) => {
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
      </div>
      <Transcript value={transcript} />
    </div>
  );
};
