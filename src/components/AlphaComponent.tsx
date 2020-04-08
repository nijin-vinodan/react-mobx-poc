import React, { FunctionComponent, useEffect } from 'react';
import { ToDoStore } from '../store/ToDoStore';
import { useObserver } from 'mobx-react';

export interface AlphaComponentProps {

}

export const AlphaComponent: FunctionComponent<AlphaComponentProps> = props => {
    useEffect(() => {
        console.log("Alpha: useEffect");
    }, []);

    return useObserver(() => (
        <div className="container alpha">
            <h1>Alpha Readings</h1>
            <ul>
                {
                    ToDoStore.viewTodoList.map(todo => <li key={todo.id}>{todo.task}</li>)
                }
            </ul>
        </div>
    ))
}
