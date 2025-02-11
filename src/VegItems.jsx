import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import './App.css';

function VegItems() {
  const vegItems = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = vegItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const finalItems = filteredItems.length ? (
    filteredItems.map((item, index) => (
      <li key={index} className="item-card">
        <img
          src={Array.isArray(item.image) ? item.image[0] : item.image}
          alt={item.name}
          className="vegItems"
        />
        <div className="product-name">{item.name}</div>
        <div className="product-price">₹{item.price}</div>
        <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
      </li>
    ))
  ) : (
    <div className="not-found">Items Not Found</div>
  );

  return (
    <div className="veg-items-container">
      <h1 style={{
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: '20px',
  color: 'red',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
}}>
  Veg Items
</h1>
      <input
        type="text"
        placeholder="Search Veg Items..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="items-list">{finalItems}</ul>
    </div>
  );
}

export default VegItems;
