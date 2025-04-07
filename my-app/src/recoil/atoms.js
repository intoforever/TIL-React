import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState', // 고유 식별자
  default: [],          // 초기 값 (빈 배열)
});