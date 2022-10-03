import TodoStore from "./TodoStore";

class ListStore {
    todos: Array<TodoStore>

    constructor() {
        this.todos = [];
    }
}

export default ListStore;
