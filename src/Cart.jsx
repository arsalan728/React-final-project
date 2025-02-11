import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./Store";
import { useState } from "react";


import { data } from "react-router-dom";

function Cart() {
  let dispatch = useDispatch();
  const items = useSelector((state) => state.cart); // Get cart array directly

  // Calculating total amount before discount
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // calculating discounted amount
  const [discountedAmount, setdiscountedAmount] = useState(0);
  let discTotal = (totalAmount * discountedAmount) / 100;
  let finalAmount = totalAmount - discTotal;

  const finalItems = items.map((item, index) => (
    <li key={index}>
      {item.name} - {item.price}
      <img 
    src={Array.isArray(item.image) ? item.image[0] : item.image} 
    alt={item.name} 
    className="vegItems" 
  />
      <button onClick={() => dispatch(increment(item))}>+</button>
      <button onClick={() => dispatch(decrement(item))}>-</button>
      Quantity: {item.quantity}
      <button onClick={() => dispatch(remove(item))}>Remove</button>
    </li>
  ));

  let [couponCode, setcouponCode] = useState('');
  // Based on the coupon discount setting in it
  let [couponDiscountPercentage, setcouponDiscountPercentage] = useState(0);
  
  let handingCuponper = () => {
    switch (couponCode.toUpperCase()) {
      case 'ARSALAN10':
        setcouponDiscountPercentage(10);
        break;
      case 'ARSALAN20':
        setcouponDiscountPercentage(20);
        break;
      case 'ARSALAN30':
        setcouponDiscountPercentage(30);
        break;
      case 'ARSALAN40':
        setcouponDiscountPercentage(40);
        break;
      default:
        alert('Invalid coupon code');
        setcouponDiscountPercentage(0);
    }
  };

  // Calculate coupon discount
  let couponDiscountAmount = (totalAmount * couponDiscountPercentage) / 100;
  // Calculating actual amount after using coupon code
  let actualAmountCoupon = totalAmount - couponDiscountAmount;

  let [showCouponDetails, setshowCouponDetails] = useState(false);
  let [showBeforeDiscountCoupon, setshowBeforeDiscountCoupon] = useState(false);

  let handleCompletePurchase=()=>{
    const purchaseDate=new Date().toLocaleDateString();
    let purchaseDetails={
      date:purchaseDate,
      items:[...items],
      totalAmount:totalAmount
    }
    //send object to store
    dispatch(addPurchaseDetails(purchaseDetails));
    //clear the cart
    dispatch(clearCart());
    
  }

  return (<>
  {
  items.length>0 ?
    <div className="cart-container">
      <h1>Cart</h1>
       <ul>{finalItems}</ul>
      <p>Total: {totalAmount}</p> 
      {showBeforeDiscountCoupon && (
        <div>
          <p>Discount Applied: {discTotal.toFixed(2)}</p>
          <p>Final Net Amount To Pay: {finalAmount.toFixed(2)}</p>
        </div>
      )}
      <div className="discount-buttons">
        <button onClick={() => { setdiscountedAmount(10); setshowBeforeDiscountCoupon(true); }}>10% Discount</button>
        <button onClick={() => { setdiscountedAmount(20); setshowBeforeDiscountCoupon(true); }}>20% Discount</button>
        <button onClick={() => { setdiscountedAmount(30); setshowBeforeDiscountCoupon(true); }}>30% Discount</button>
      </div>

      <p>
        <input
          type="text"
          value={couponCode}
          placeholder="Enter Coupon Code"
          onChange={(e) => setcouponCode(e.target.value)}
        />
      </p>
      <button onClick={() => { handingCuponper(); setshowCouponDetails(true); }}>Apply Coupon Code</button>

      {showCouponDetails && (
        <div className="coupon-details">
          <p>Your Entered Coupon Code: {couponCode}</p>
          <p>MRP: {totalAmount}</p>
          <p>Your Coupon Code Discount: {couponDiscountAmount.toFixed(2)}</p>
          <p>Your Net Amount To Pay: {actualAmountCoupon.toFixed(2)}</p>
        </div>
      )}
      <button onClick={handleCompletePurchase}>Compelete Purchase</button>
    </div>
    :
    <div>
      <h1 style={{
  fontSize: '2.5rem',
  fontWeight: 'bold',
  
  textAlign: 'center',
  marginBottom: '20px',
  color: 'red',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
}}>
  Your cart is empty.
</h1>
    </div>
}
    </>
  );



  };


    


export default Cart;
