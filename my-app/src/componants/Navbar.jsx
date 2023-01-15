import React from "react";
import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <h2>TeeRex Store</h2>
      </div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"
          alt="cart logo"
          height="30px"
          width="30px"
        />
      </div>
    </div>
  );
};

export default Navbar;
