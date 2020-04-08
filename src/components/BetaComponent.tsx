import React, { FunctionComponent, useEffect } from 'react';
import { ToDoStore } from '../store/ToDoStore';
import { useObserver } from 'mobx-react';


export interface BetaComponentProps {

}

export const BetaComponent: FunctionComponent<BetaComponentProps> = props => {
    useEffect(() => {
        console.log("Beta: useEffect");
    }, []);

    return useObserver(() => (
        <div className="container beta">
            <h1>Beta Readings</h1>
            <h3>Total Notes : {ToDoStore.viewTodoList.length}</h3>
            <ul>
                {
                    ToDoStore.viewTodoList.map(todo => <li key={todo.id}>{todo.task}</li>)
                }
            </ul>
            <button onClick={() => {
                ToDoStore.addToDo(`Task ${new Date()}`);
            }}>
                Add To List
            </button>
        </div>
    ))
}
