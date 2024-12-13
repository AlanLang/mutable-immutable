import { ScoreItem } from './type';
import { ScoreItemViewWithObserver } from './ScoreItemView';

export const Transcript = ({ value }: { value: ScoreItem[] }) => {
  return (
    <div>
      {value.map((item) => {
        return <ScoreItemViewWithObserver key={item.name} value={item} />;
      })}
    </div>
  );
};
