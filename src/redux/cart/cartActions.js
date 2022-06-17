import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM, SET_ITEM } from "./cartConstants";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item: { ...item, product: item.product || item },
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item,
  };
}

export function clearItems() {
  return {
    type: CLEAR_ITEM,
  };
}

export function setItems(items) {
  return {
    type: SET_ITEM,
    items,
  };
}
