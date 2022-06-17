import store from "./store";

let currentUser;

const listener = () => {
  let previousUser = currentUser;

  currentUser = store.getState().userLogin;

  if (currentUser !== previousUser) {
    localStorage.setItem("auth", JSON.stringify(currentUser));
  }
};

const listen = () => {
  store.subscribe(listener);
};

export { listen };
