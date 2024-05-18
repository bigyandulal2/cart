import { useState } from "react";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import ClickCart from "./ClickCart";
import { valGlobal } from "../GlobalContext/UseGlobal";
import Delete from "../images/icon-close.svg";
import menu from "../images/icon-menu.svg";

const styles = {
  height: "100vh",
  width: "60vw",
  display: "block",
  background: "white",
  position: "absolute",
  top: "0%",
  left: "0%",
};
const nav_list = {
  position: "absolute",
  flexDirection: "column",
  top: "0%",
  left: "0%",
  gap: "1rem",
  padding: "10rem 2rem",
};
const delete_item = {
  display: "block",
  position: "absolute",
  height: "20px",
  width: "20px",
  margin: "20px 10px",
  zIndex: "999",
};

export default function Navbar({ close }) {
  const [clickCart, setClickCart] = useState(false);
  const { itemQuantity } = valGlobal();
  // const [menuOpen, setMenuOpen] = useState(false);
  const { menuOpen, dispatch } = valGlobal();

  function handleClick() {
    setClickCart((e) => !e);
  }
  function handleClose() {
    dispatch({ type: "menuClose" });
  }

  return (
    <div>
      <div className="flex" id="navbar" style={close ? { opacity: 0.6 } : {}}>
        <img
          src={menu}
          alt="menu"
          id="navbar_menu"
          onClick={() => dispatch({ type: "toggleMenu" })}
        />
        <img src={Logo} alt="logo" className="h-8" />

        <div className=" flex-1" id="nav_list" style={menuOpen ? styles : {}}>
          <p
            style={menuOpen ? { display: "block" } : { display: "none" }}
            onClick={handleClose}
          >
            {" "}
            <img
              src={Delete}
              alt="menu_close"
              style={menuOpen ? delete_item : { display: "none" }}
            />{" "}
          </p>

          <div className="flex   gap-6" id="list_items">
            <ul
              id="navbar_list_items"
              className="flex gap-12 text-2xl font-medium"
              style={menuOpen ? nav_list : {}}
            >
              <li> Collections</li>
              <li> Men</li>
              <li> Women</li>
              <li> About</li>
              <li> Contact</li>
            </ul>
          </div>
        </div>

        <div className="relative" onClick={handleClick}>
          <img
            src={Cart}
            alt="cart"
            className=" h-8 w-8 self-center"
            id="navbar_cart"
          />
          {itemQuantity > 0 && (
            <div id={"cart_no"}>
              <span>{itemQuantity}</span>
            </div>
          )}
        </div>

        <div
          className="rounded-full w-16 h-16 text-center"
          id="navbar_avatar_box"
        >
          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
      {clickCart && <ClickCart />}
    </div>
  );
}
