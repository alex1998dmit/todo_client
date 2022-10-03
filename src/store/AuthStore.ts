import { ApiPath } from "../models/requests";
import requestAgent from "../utils/requests";
import RootStore from "./RootStore";

class AuthStore {
  rootStore: RootStore;
  isAuthed: boolean = !!this.getAccessToken();

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  getAccessToken() {
    return localStorage.getItem("authToken");
  }

  logout = () => {
    this.clearAccessToken();
    this.isAuthed = false;
  };

  setAccessToken = (token: string) => {
    localStorage.addItem("authToken", token);
  };

  clearAccessToken = () => {
    localStorage.removeItem("authToken");
  };
}

export default AuthStore;
