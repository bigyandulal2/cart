import { useState } from "react";
import "./App.css";
import "./sass/main/main.scss";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { ContextApi } from "./GlobalContext/UseGlobal";
const styles = {
  background: "hsla(0, 0%, 0%, 75%)",
};
function App() {
  const [close, setClose] = useState(false);
  return (
    <ContextApi>
      <div className="parent" style={close ? styles : {}}>
        <Navbar close={close} />
        <Hero close={close} setClose={setClose} />
      </div>
    </ContextApi>
  );
}

export default App;
