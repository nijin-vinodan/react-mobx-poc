import React, { FunctionComponent, useEffect } from 'react';
import store from '../store/ToDoStoreMST';
import { useObserver } from 'mobx-react';

export interface GammaComponentProps {

}

export const GammaComponent: FunctionComponent<GammaComponentProps> = props => {
    useEffect(() => {
        console.log("Gamma: useEffect");
    }, []);

    return useObserver(() => (
        <div className="container gamma">
            <h1>Gamma Readings (MST)</h1>
            <h3>Total Notes : {store.todoList.length}</h3>
            <ul>
                {
                    store.todoList.map(todo => <li key={todo.id}>{todo.task}</li>)
                }
            </ul>
            <button onClick={() => {
                store.addToDo(`Task ${new Date()}`);
            }}>
                Add To List
            </button>
        </div>
    ))
}
