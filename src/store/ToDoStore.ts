import { observable, computed, action } from "mobx";

class Store {
    @observable todoList = [];

    constructor() {
        console.log("Store: Constructor");
    }

    @computed get viewTodoList() {
        console.log("Store: View To Do", this.todoList.length);
        return this.todoList;
    }

    @action addToDo(task) {
        console.log("Store: Pushing to To Do", task);
        this.todoList.push({
            id: this.todoList.length,
            task: task,
            completed: false,
            assignee: null
        })
    }
}

export const ToDoStore = new Store();