export interface IPropgressStoryProp {
  [key: string]: string[];
}

export interface IProgressProp {
  [key: string]: number[];
}

export interface IActiveUserProps {
  clientID: string;
  coin: string;
  crown: string;
  progress: IProgressProp;
  progressStory: IPropgressStoryProp;
}
