import { selector } from 'recoil';
import { todoListState } from './atoms';

export const activeTodoListState = selector({
    key: 'activeTodoListState',
    get: ({get}) => {
        const list = get(todoListState);
        return list.filter(todo => !todo.completed);
    },
});

export const completedTodoListState = selector({
    key: 'completedTodoListState',
    get: ({get}) => {
        const list = get(todoListState);
        return list.filter(todo => todo.completed);
    },
});