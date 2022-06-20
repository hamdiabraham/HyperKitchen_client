import store from "./store";

// let currentUser;

// const listener = () => {
//   let previousUser = currentUser;

//   currentUser = store.getState().userLogin;

//   if (currentUser !== previousUser) {
//     localStorage.setItem("auth", JSON.stringify(currentUser));
//   }
// };

let currentCart;

const listener = () => {
  let previousCart = currentCart;

  currentCart = store.getState().cart;

  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
};

const listen = () => {
  store.subscribe(listener);
};

export { listen };
