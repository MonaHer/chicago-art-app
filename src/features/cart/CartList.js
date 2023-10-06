import { removeFromCart } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);

  function handleRemoveFromCart(artwork) {
    dispatch(removeFromCart(artwork));
  }

  function calculateTotalPrize() {
    return cartItems.reduce(
      (total, artwork) => total + artwork.thumbnail.width,
      0
    );
  }

  return (
    <>
      <h2>SHOPPING CART</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((artwork) => (
              <li key={artwork.id}>
                {artwork.title}
                <button onClick={() => handleRemoveFromCart(artwork)}>
                  Remove from cart
                </button>
              </li>
            ))}
          </ul>
          <p>Price in total: {calculateTotalPrize()}€</p>
        </>
      )}
    </>
  );
}
