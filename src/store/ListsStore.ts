import { makeAutoObservable } from "mobx";
import ListStore from "./ListStore";
import RootStore from "./RootStore";

class ListsStore {
    public lists: Array<ListStore>;
    public rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.lists = [];
        this.rootStore = rootStore;
        makeAutoObservable(this, { rootStore: false })
    }
 }

 export default ListsStore;