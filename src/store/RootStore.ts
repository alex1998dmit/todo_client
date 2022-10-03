import AuthStore from "./AuthStore";
import ListsStore from "./ListsStore";
import TodosStore from "./TodosStore";

class RootStore {
    authStore: AuthStore;
    todosStore: TodosStore;
    listsStore: ListsStore;

    constructor() {
      this.authStore = new AuthStore(this);
      this.todosStore = new TodosStore(this);
      this.listsStore = new ListsStore(this);
    }
}

export default RootStore;
