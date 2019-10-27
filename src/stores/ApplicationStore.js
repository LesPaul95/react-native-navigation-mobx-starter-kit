import { observable } from "mobx";

class ApplicationStore {
  @observable isApp;

  constructor() {
    this.isApp = true;
  }
}

export const applicationStore = new ApplicationStore();
