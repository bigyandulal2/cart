import Img1 from "../images/image-product-1.jpg";
import Delete from "../images/icon-delete.svg";
import { valGlobal } from "../GlobalContext/UseGlobal";
export default function ClickCart() {
  const { cart, itemQuantity, dispatch } = valGlobal();
  function handleDelete() {
    dispatch({ type: "removeItemQuantity" });
    dispatch({ type: "removeCart" });
  }
  return (
    <div>
      <div className="none" id="cart">
        <p id="cart_name" className="text-2xl font-bold">
          cart
        </p>
        <hr className="mt-4" />

        {!cart && (
          <div className="w-full h-full grid place-items-center">
            <h1 className="text-2xl">Cart is Empty</h1>{" "}
          </div>
        )}
        {cart && (
          <>
            <div id="cart_box">
              <div id="cart_img_box">
                <img src={Img1} alt="productImage" />
              </div>

              <div id="cart_box_detail">
                <span>Fall limited Edition sneakers</span>
                <p>
                  $125 *{itemQuantity} <strong>{125 * itemQuantity}</strong>
                </p>
              </div>
              <img src={Delete} alt="delete" onClick={handleDelete} />
            </div>
            <button id="btn" className="btn_cart">
              CheckOut
            </button>
          </>
        )}
      </div>
    </div>
  );
}
