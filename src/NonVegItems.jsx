import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import './App.css';

function NonVegItems() {
  const nonvegItems = useSelector((state) => state.products.nonVeg);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = nonvegItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const finalItems = filteredItems.length ? (
    filteredItems.map((item, index) => (
      <li key={index} className="item-card">
        <img
          src={Array.isArray(item.image) ? item.image[0] : item.image}
          alt={item.name}
          className="nonvegItems"
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
    <div className="nonveg-items-container">
      <h1 style={{
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginBottom: '20px',
  color: 'red',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
}}>
  Non-Veg Items
</h1>
      <input
        type="text"
        placeholder="Search Non-Veg Items..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="items-list">{finalItems}</ul>
    </div>
  );
}

export default NonVegItems;
