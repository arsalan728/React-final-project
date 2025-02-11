// function Home() {
//   return (
//     <div className="home-container">
//       <h1>This is Home page</h1>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <animated.div className="text-center bg-danger text-white p-5 rounded mb-5" style={fadeIn}>
        <h1 className="display-4">Welcome to 🛒 MyShop</h1>
        <p className="lead">Your one-stop shop for fresh vegetables, meat, milk, and more!</p>
        <Link to="/VegItems" className="btn btn-light btn-lg mt-3">
          Shop Now
        </Link>
      </animated.div>

      {/* Categories Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Explore Our Categories</h2>
        <div className="row">
          {/* Vegetables Card (Red) */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-danger text-white">
              <img src="vegetables.jpg" className="card-img-top" alt="Vegetables" />
              <div className="card-body text-center">
                <h5 className="card-title">Vegetables</h5>
                <Link to="/VegItems" className="btn btn-light">
                  View More
                </Link>
              </div>
            </div>
          </div>

          {/* Non-Veg Items Card (Orange) */}
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ backgroundColor: "#FFA500", color: "white" }}>
              <img src="nonveg.jpg" className="card-img-top" alt="Non-Veg Items" />
              <div className="card-body text-center">
                <h5 className="card-title">Non-Veg Items</h5>
                <Link to="/NonVegItems" className="btn btn-light">
                  View More
                </Link>
              </div>
            </div>
          </div>

          {/* Milk Products Card (White) */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 bg-white text-dark border">
              <img src="milkspro.jpg" className="card-img-top" alt="Milk Products" />
              <div className="card-body text-center">
                <h5 className="card-title">Milk Products</h5>
                <Link to="/MilkItems" className="btn btn-danger">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-light p-4 rounded mb-5">
        <h2 className="text-center mb-3">About Us</h2>
        <p className="text-center">
          At MyShop, we believe in providing fresh and quality products at your convenience. Discover our wide range
          of products and enjoy a seamless shopping experience.
        </p>
        <div className="text-center">
          <Link to="/AboutUs" className="btn btn-danger">
            Learn More
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center">
        <p>© 2025 MyShop. All rights reserved.</p>
        <Link to="/ContactUs">Contact Us</Link>
      </footer>
    </div>
  );
}

export default Home;
