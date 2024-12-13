import { ScoreItem } from './type';

export const Transcript = ({ value, itemView }: { value: ScoreItem[], itemView: React.FC<{
  value: ScoreItem
}>}) => {
  const ItemView = itemView;
  return (
    <div>
      {value.map((item) => {
        return <ItemView key={item.name} value={item} />;
      })}
    </div>
  );
};
