import { useState } from 'react';
import { Transcript } from './TranscriptView';
import { TranscriptChanger } from './TranscriptChanger';
import { Store } from './store';

export const App = () => {

  const [store] = useState<Store>(() => new Store());
  const transcript = store.transcript;

  return (
    <div>
      <TranscriptChanger store={store}/>
      <Transcript value={transcript} />
    </div>
  );
};
