import { ScoreItem } from './type';
import { ScoreItemView } from './ScoreItemView';

export const Transcript = ({ value }: { value: ScoreItem[] }) => {
  return (
    <div>
      {value.map((item) => {
        return <ScoreItemView key={item.name} value={item} />;
      })}
    </div>
  );
};
