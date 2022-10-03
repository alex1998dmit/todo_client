import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

class TodosStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, {
            rootStore: false
        })
    }
}

export default TodosStore;
