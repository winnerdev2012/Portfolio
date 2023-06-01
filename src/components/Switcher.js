import Head from "next/head";
import { Fragment, useState } from "react";
const colors = [
  { id: 1, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "red" },
  { id: 4, name: "blue" },
  { id: 5, name: "orange" },
  { id: 6, name: "yellowgreen" },
  { id: 7, name: "pink" },
  { id: 8, name: "goldenrod" },
];
const Switcher = () => {
  const [color, setColor] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href={`css/skins/${color}.css`} />
      </Head>
      <div
        id="switcher"
        className={toggle ? "open" : "close"}
        style={{ display: "block" }}
      >
        <div className="content-switcher">
            <iframe id="embedded" src="assets/test.html"></iframe>
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className={`styleSecondColor ${toggle ? "close" : "open"}`}
        onClick={() => setToggle(true)}
      >
        <i className="fa fa-user" />
      </div>
    </Fragment>
  );
};
export default Switcher;
