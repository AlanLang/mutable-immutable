import { useState } from 'react';
import { Transcript } from './TranscriptView';
import { ScoreItem } from './type';

export const App = () => {
  const [transcript] = useState<ScoreItem[]>([
    { name: '张三', score: 80 },
    { name: '李四', score: 90 },
    { name: '王五', score: 78 },
  ]);

  return (
    <div>
      <Transcript value={transcript} />
    </div>
  );
};
