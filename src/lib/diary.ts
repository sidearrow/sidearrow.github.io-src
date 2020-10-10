import diaryJson from '../../content/out/dialy.json';

export type Diary = {
  id: string;
  html: string;
};

export const diary = {
  getMany: (): Diary[] => {
    return diaryJson;
  },
  getOne: (id: string): Diary | undefined => {
    return diaryJson.find((v) => v.id === id);
  },
  getIds: (): string[] => {
    return diaryJson.map((v) => v.id);
  },
};
