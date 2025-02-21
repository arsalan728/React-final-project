// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { addToCart } from "./Store";
// import './App.css';

// function VegItems() {
//   const vegItems = useSelector((state) => state.products.veg);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredItems = vegItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const finalItems = filteredItems.length ? (
//     filteredItems.map((item, index) => (
//       <li key={index} className="item-card">
//         <img
//           src={Array.isArray(item.image) ? item.image[0] : item.image}
//           alt={item.name}
//           className="vegItems"
//         />
//         <div className="product-name">{item.name}</div>
//         <div className="product-price">₹{item.price}</div>
//         <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
//       </li>
//     ))
//   ) : (
//     <div className="not-found">Items Not Found</div>
//   );

//   return (
//     <div className="veg-items-container">
//       <h1 style={{
//   fontSize: '2.5rem',
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   textAlign: 'center',
//   marginBottom: '20px',
//   color: 'red',
//   textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
// }}>
//   Veg Items
// </h1>
//       <input
//         type="text"
//         placeholder="Search Veg Items..."
//         className="search-bar"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <ul className="items-list">{finalItems}</ul>
//     </div>
//   );
// }

// export default VegItems;
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";
import "./App.css";

function VegItems() {
  const vegItems = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

  const filteredItems = vegItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const pageStartItemIndex = pageNumber * itemsPerPage;
  const pageEndItemIndex = pageStartItemIndex + itemsPerPage;
  const currentPageItems = filteredItems.slice(pageStartItemIndex, pageEndItemIndex);

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  return (
    <div className="veg-items-container">
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "20px",
          color: "red",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        Veg Items
      </h1>
      <input
        type="text"
        placeholder="Search Veg Items..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="items-list">
        {currentPageItems.length ? (
          currentPageItems.map((item, index) => (
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
        )}
      </ul>

      {/* Pagination Section */}
      <div
        className="pagination-controls"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px", // Adds space between buttons
          marginTop: "20px",
        }}
      >
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn ${index === pageNumber ? "btn-primary" : "btn-secondary"}`}
            onClick={() => handlePageChange(index)}
            style={{ margin: "0 5px" }} // Adds extra spacing between buttons
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(pageNumber + 1)}
          disabled={pageNumber === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VegItems;
