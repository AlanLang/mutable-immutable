import { useState } from 'react';
import { Transcript } from './TranscriptView';
import { TranscriptChanger } from './TranscriptChanger';
import { Store } from './store';
import { ScoreItemView, ScoreItemViewWithObserver } from './ScoreItemView';
import { toJS, reaction } from 'mobx';

export const App = () => {

  const [store] = useState<Store>(() => new Store());
  const transcript = store.transcript;

  return (
    <div>
      <TranscriptChanger store={store}/>
      <Transcript value={transcript} itemView={ScoreItemViewWithObserver} />
    </div>
  );
};

export const App1 = () => {
  const [store] = useState<Store>(() => {
    const store = new Store();
    reaction(() => toJS(store.transcript), (data) => {
      setTranscript(data)
    })
    return store;
  });
  const [transcript, setTranscript] = useState(toJS(store.transcript))




  return (
    <div>
      <TranscriptChanger store={store}/>
      <Transcript value={transcript} itemView={ScoreItemView} />
    </div>
  );
}
