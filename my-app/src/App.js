import { useEffect, useState } from "react";
import Productlist from "./pages/Productlist";

// import products from "./Data/db";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <div className="App">
      <Productlist products={products} />
    </div>
  );
}

export default App;
