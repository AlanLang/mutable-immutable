import { ScoreItem } from './type';

export const ScoreItemView = ({ value }: { value: ScoreItem }) => {
  return (
    <div>
      <span style={{ marginRight: 12 }}>姓名：{value.name}</span>
      <span>得分：{value.score}</span>
    </div>
  );
};
