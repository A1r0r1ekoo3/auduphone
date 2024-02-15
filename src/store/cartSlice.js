import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
  email: null,
  token: null,
  id: null,
};
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    addItem: (state, action) => {
      const product = action.payload;
      console.log(product);
      const item = state.cartItems.find((i) => i.id === product.id);
      if (!item) {
        state.cartItems.push(product);
        state.cartTotal += 1;
        state.shipping += product.price;
        toast.success("Item added to cart");
      }
      toast.warn("Already added to cart");
    },

    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const product = state.cartItems.find((i) => i.id === id);
      state.cartItems = state.cartItems.filter((i) => i.id !== id);
      state.numItemsInCart -= product.price;
      state.cartTotal -= product.price * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from cart");
    },
    editItem: (state, action) => {
      const { id, price } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      state.numItemsInCart += price - item.price;
      state.cartTotal += item.price * (price - item.price);
      item.price = price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem, removeUser, setUser } =
  cartSlice.actions;

export default cartSlice.reducer;
