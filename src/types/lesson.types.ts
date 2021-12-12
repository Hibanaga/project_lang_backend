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

export interface IIntroduceLessonProps {
  title: string;
  content: IContentTypeAProp[] | IContentTypeBProp[] | IContentTypeCProp[];
}
