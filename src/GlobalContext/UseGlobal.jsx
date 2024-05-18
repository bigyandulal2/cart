import { createContext, useContext, useReducer } from "react";
const useGlobal = createContext();

const initialValue = {
  cart: false,
  quantity: 0,
  itemQuantity: 0,
  menuOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "cartTrue":
      return { ...state, cart: true };
    case "incQuantity":
      return { ...state, quantity: state.quantity + 1 };
    case "decQuantity":
      return { ...state, quantity: state.quantity - 1 };
    case "newQuantity":
      return { ...state, quantity: 0 };
    case "itemQuantity":
      return { ...state, itemQuantity: action.payload + state.itemQuantity };
    case "removeItemQuantity":
      return { ...state, itemQuantity: 0 };
    case "removeCart":
      return { ...state, cart: false };
    case "toggleMenu":
      return { ...state, menuOpen: !state.menuOpen };
    case "menuClose":
      return { ...state, menuOpen: false };
  }
}
function ContextApi({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { cart, quantity, itemQuantity, menuOpen } = state;

  return (
    <useGlobal.Provider
      value={{
        dispatch,
        cart,
        quantity,
        itemQuantity,
        menuOpen,
      }}
    >
      {children}
    </useGlobal.Provider>
  );
}

function valGlobal() {
  const data = useContext(useGlobal);
  return data;
}
export { valGlobal, ContextApi };
