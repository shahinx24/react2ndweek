import { useReducer } from "react";

function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    const existing = state.find(item => item.id === action.item.id);

    if (existing) {
      return state.map(item =>
        item.id === action.item.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }

    return [...state, { ...action.item, qty: 1 }];
  }

  if (action.type === "INCREASE_QTY") {
    return state.map(item =>
      item.id === action.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
  }

  if (action.type === "DECREASE_QTY") {
    return state
      .map(item =>
        item.id === action.id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter(item => item.qty > 0);
  }

  if (action.type === "REMOVE_ITEM") {
    return state.filter(item => item.id !== action.id);
  }

  return state;
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const product = {
    id: 1,
    name: "Sneakers",
    price: 2000,
  };

  return (
    <>
      <h2>Product</h2>
      <p>{product.name} - ₹{product.price}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", item: product })}>
        Add to Cart
      </button>

      <hr />

      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price} × {item.qty}
          </p>

          <button onClick={() => dispatch({ type: "INCREASE_QTY", id: item.id })}>
            +
          </button>

          <button onClick={() => dispatch({ type: "DECREASE_QTY", id: item.id })}>
            -
          </button>

          <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
