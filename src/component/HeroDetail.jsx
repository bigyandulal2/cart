import React from "react";
import { valGlobal } from "../GlobalContext/UseGlobal";
export default function HeroDetail() {
  const { dispatch, quantity } = valGlobal();
  function handleInc() {
    dispatch({ type: "incQuantity" });
  }
  function handleDec() {
    if (quantity === 0) {
      return;
    }
    // setQuantity((e) => e - 1);
    dispatch({ type: "decQuantity" });
  }
  function handleClick() {
    // setCart(true);
    if (quantity === 0) {
      alert("please add at least  one item");
      return;
    }

    dispatch({ type: "cartTrue" });
    dispatch({ type: "itemQuantity", payload: quantity });
    dispatch({ type: "newQuantity" });
    alert("item added successfully!!!");
  }
  return (
    <div id="hero_detail">
      <span className="text-3xl font-semibold" id="hero_detail_name">
        {" "}
        Sneaker Company
      </span>
      <h1 className="text-6xl text-bolder  font-bold" id="hero_detail_details">
        {" "}
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-2xl" id="hero_detail_description">
        {" "}
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <p className="flex align-middle" id="hero_detail_price">
        <span className="text-3xl font-bold">$125.00</span>
        <span className=" text-xl " id="hero_detail_price_discount">
          50%
        </span>
      </p>
      <div className="text-2xl" id="hero_detail_discount">
        <p id="hero_detail_discount">$250.00</p>
      </div>

      <div className="flex align-middle gap-9" id="hero_detail_cartlist">
        <div className="flex align-middle text-center" id="hero_detail_cart">
          <p onClick={handleDec}>
            <svg
              width="20"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="plus"
            >
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </p>
          <p className="text-2xl ">{quantity}</p>

          <p onClick={handleInc}>
            <svg
              width="16"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="minus"
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
            </svg>
          </p>
        </div>

        <a className="text-xl px-5" id="btn" onClick={handleClick}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="hsl(223, 64%, 98%)"
              fillRule="nonzero"
            />
          </svg>
          Add to Cart
        </a>
      </div>
    </div>
  );
}
