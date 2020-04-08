import { types, onSnapshot } from 'mobx-state-tree';

// ToDo Model
const ToDo = types.model("ToDo", {
    id: types.number,
    task: types.string,
    done: false
})

// ToDoS Model
const Store = types.model("Store", {
    todos: types.array(ToDo)
}).actions(self => ({
    addToDo(task) {
        self.todos.push({
            id: self.todos.length,
            task: task
        })
    }
})).views(self => ({
    get todoList() {
        return self.todos;
    }
}));

// Creating Store
const store = Store.create({
    todos: [
        {
            id: 0,
            task: 'Default Task'
        }
    ]
})

// Printing Snapshot
onSnapshot(store, snapshot => {
    console.log("Store: Printing Snapshot", snapshot);
})

export default store;