export interface IContentTypeAProp {
  type: string;
  typeQuestion: string;
  questionDefaultLang: string;
  varianAnswer: { id: string; answer: string }[];
  answer: string;
}
export interface IContentTypeBProp {
  type: string;
  typeQuestion: string;
  startQuestion: string;
  varianAnswer: { id: string; answer: string }[];
  answer: string;
}

export interface IContentTypeCProp {
  type: string;
  typeQuestion: string;
  startQuestion: string;
  answer: string;
}

export interface IStoryLessonNonActiveProp {
  id: string;
  person: string;
  replica: string;
  actionType: string;
}

export interface IStoryLesssonActiveProp {
  id: string;
  person: string;
  title: string;
  replica: string;
  correctAnswer: string;
  actionType: string;
  variantAnswer: { id: string; replica: string }[];
}

export interface IIntroduceLessonProps {
  title: string;
  content: IContentTypeAProp[] | IContentTypeBProp[] | IContentTypeCProp[];
}

export interface IStoryLessonProps {
  theme: string;
  title: string;
  dialog: IStoryLessonNonActiveProp[] | IStoryLesssonActiveProp[];
}
