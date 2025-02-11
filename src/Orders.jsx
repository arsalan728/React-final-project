import { useSelector } from "react-redux";

 

function Orders() {
  //const purchaseHistory = useSelector((state) => state.purchaseDetails);
   const purchaseHistory=useSelector(state=>state.purchaseDetails);
  return (
    // <div>
    //   <h2>Purchase History</h2>
    //   {purchaseHistory.length === 0 ? (
    //     <p>No purchase history available.</p>
    //   ) : (
    //     <ul>
    //       {purchaseHistory.map((purchase, index) => (
    //         <li key={index}>
    //           <p>Date: {purchase.date}</p>
    //           <ul>
    //             {purchase.items.map((item, itemIndex) => (
    //               <li key={itemIndex}>
    //                 {item.name} - ${item.price} x {item.quantity}
    //               </li>
    //             ))}
    //           </ul>
    //           <p>Total Amount: ${purchase.totalAmount.toFixed(2)}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    ///</div>
    <div className="orders-container">
    <h2>Purchase History</h2>
    {purchaseHistory.length === 0 ? (
      <p>No purchase history available.</p>
    ) : (
      <ul>
        {purchaseHistory.map((purchase, index) => (
          <li key={index}>
            <p>Date: {purchase.date}</p>
            <ul>
              {purchase.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.name} - ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <p>Total Amount: ₹{purchase.totalAmount.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
  
  );
}

export default Orders;