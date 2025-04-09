import { atom } from 'recoil';

export const todoListState = atom({
    key: 'todoListState', // NOTE: 고유 식별자
    default: localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []
});

export const activeOnState = atom({
    key: 'activeOnState',
    default: true
});

export const completeOnState = atom({
    key: 'completeOnState',
    default: false
});