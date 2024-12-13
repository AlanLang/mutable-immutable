import { action, makeObservable, observable } from "mobx";
import { ScoreItem } from "./type";

export class Store {
  constructor() {
    makeObservable(this);
  }

  @observable
  public transcript: ScoreItem[] = [
      { name: '张三', score: 80 },
      { name: '李四', score: 90 },
      { name: '王五', score: 78 },
    ];

  @action
  public updateScore(name: string, score: number) {
    const item = this.transcript.find((item) => item.name === name);
    if (item) {
      item.score = score;
    }
  }
}
