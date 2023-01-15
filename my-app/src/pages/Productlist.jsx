import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const Productlist = ({ products }) => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [toggle, settoggle] = useState(true);

  var cartData = data.filter((el) => el.selectedQuantity > 0);

  const sum = cartData.map((el) => el.selectedQuantity * el.price);

  const totalPrice = sum.reduce((acc, curr) => acc + curr, 0);

  // search functionality
  const handleSearch = () => {
    const filteredData = products.filter((el) => {
      return (
        el.type.toLowerCase().match(search.toLowerCase()) ||
        el.name.toLowerCase().match(search.toLowerCase()) ||
        el.gender.toLowerCase().match(search.toLowerCase()) ||
        el.color.toLowerCase().match(search.toLowerCase())
      );
    });
    setdata(filteredData);
  };

  // filter functionalities
  const handleCheck = (e) => {
    const { name, value } = e.target;
    const filteredData = products.filter((el) => {
      if (name === "color") {
        return el.color === value;
      } else if (name === "gender") {
        return el.gender === value;
      } else if (name === "price") {
        if (value === "250") {
          return el.price <= value;
        } else if (value === "250-450") {
          return el.price > 250 && el.price < 450;
        } else {
          return el.price === 450;
        }
      } else if (name === "type") {
        return el.type === value;
      }
    });
    setdata(filteredData);
  };

  // counter functionality
  const handlecount = (id, key) => {
    const updatedarr = data.map((el) => {
      if (el.id === id) {
        if (el.quantity <= el.selectedQuantity) {
          alert("Out of Stock");
        } else if (key === "1") {
          el.selectedQuantity += 1;
        } else if (key === "plus") {
          el.selectedQuantity += 1;
        } else {
          el.selectedQuantity -= 1;
        }
      }
      return el;
    });
    setdata(updatedarr);
  };

  // delete functionality
  const handledel = (id) => {
    cartData.splice(
      cartData.findIndex((a) => a.id === id),
      1
    );
  };

  useEffect(() => {
    const fun = () => {
      return products.map((el) => {
        el.selectedQuantity = 0;
        return el;
      });
    };
    let arr = fun();
    setdata(arr);
  }, [products]);

  return (
    <>
      <div className={styles.nav}>
        <div>
          <h2>TeeRex Store</h2>
        </div>
        <div>
          <img
            onClick={() => settoggle(!toggle)}
            src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"
            alt="cart logo"
            height="30px"
            width="30px"
          />
        </div>
      </div>
      {toggle ? (
        <div className={styles.container}>
          <br />
          <div className={styles.searchbox}>
            <input
              type="text"
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search for products"
            />
            <img
              onClick={handleSearch}
              src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
              height="20px"
              width="20px"
              alt="serach logo"
            />
            <div></div>
          </div>
          <div className={styles.flexbox}>
            <div className={styles.sidebar}>
              {/* color filter  */}
              <div>
                <h3>Color</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      name="color"
                      onChange={(e) => handleCheck(e)}
                      value="Red"
                      type="checkbox"
                    />
                    <input
                      name="color"
                      onChange={(e) => handleCheck(e)}
                      value="Blue"
                      type="checkbox"
                    />
                    <input
                      name="color"
                      onChange={(e) => handleCheck(e)}
                      value="Green"
                      type="checkbox"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Red</label>
                    <label>Blue</label>
                    <label>Green</label>
                  </div>
                </div>
              </div>
              {/* filter for gender  */}
              <div>
                <h3>Gender</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      className="gender"
                      name="gender"
                      onChange={(e) => handleCheck(e)}
                      value="Men"
                      type="checkbox"
                    />
                    <input
                      className="gender"
                      name="gender"
                      onChange={(e) => handleCheck(e)}
                      value="Women"
                      type="checkbox"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Men</label>
                    <label>Women</label>
                  </div>
                </div>
              </div>
              {/* price filter  */}
              <div>
                <h3>Price</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      name="price"
                      onChange={(e) => handleCheck(e)}
                      value="250"
                      type="checkbox"
                    />
                    <input
                      name="price"
                      onChange={(e) => handleCheck(e)}
                      value="250-450"
                      type="checkbox"
                    />
                    <input
                      name="price"
                      onChange={(e) => handleCheck(e)}
                      value="450"
                      type="checkbox"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <label>0-Rs250</label>
                    <label>Rs250-450</label>
                    <label>Rs 450</label>
                  </div>
                </div>
              </div>
              {/* type filter  */}
              <div>
                <h3>Type</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      name="type"
                      onChange={(e) => handleCheck(e)}
                      value="Polo"
                      type="checkbox"
                    />
                    <input
                      name="type"
                      onChange={(e) => handleCheck(e)}
                      value="Hoodie"
                      type="checkbox"
                    />
                    <input
                      name="type"
                      onChange={(e) => handleCheck(e)}
                      value="Basic"
                      type="checkbox"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Polo</label>
                    <label>Hoodie</label>
                    <label>Basic</label>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className={styles.products}>
              {data &&
                data.map((el) => {
                  return (
                    <div key={el.id} className={styles.card}>
                      <div className={styles.imgbox}>
                        <img src={el.imageURL} alt="product img" />
                        <div className={styles.topright}>
                          <h3>{el.name}</h3>
                        </div>
                      </div>
                      <div className={styles.lowerBox}>
                        <div>
                          <h4>{el.price} Rs</h4>
                        </div>
                        {el.selectedQuantity === 0 ? (
                          <div
                            onClick={() => handlecount(el.id, "1")}
                            className={styles.addtocartbox}
                          >
                            Add to cart
                          </div>
                        ) : (
                          <div className={styles.counter}>
                            <div onClick={() => handlecount(el.id, "minus")}>
                              -
                            </div>
                            {el.selectedQuantity}
                            <div onClick={() => handlecount(el.id, "plus")}>
                              +
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.cart}>
          {cartData.length > 0 ? (
            cartData.map((el) => (
              <div>
                <div key={el.id} className={styles.lists}>
                  <div className={styles.cartproductimg}>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                      alt="product img"
                      height="100px"
                      width="90px"
                    />
                  </div>

                  <div>
                    <h5>{el.name}</h5>
                    <h6>{el.price}</h6>
                  </div>

                  <div>
                    <h6>{el.quantity}</h6>
                  </div>
                  <div>
                    <button onClick={() => handledel(el.id)}>Delete</button>
                  </div>
                </div>
                <div>
                  <hr />
                  <h4>Total Amount {`Rs ${totalPrice} `}</h4>
                </div>
              </div>
            ))
          ) : (
            <div>
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                height="100%"
                width="100%"
                alt="empty cart img"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Productlist;
