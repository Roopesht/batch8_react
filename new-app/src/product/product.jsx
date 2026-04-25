import  { useState } from "react";
import MoreInfo from "./moreinfo";


function ProductCard({ title, price, image }) {
  const [qty, setQty] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <p>Qty: {qty}</p>
     <button
  className="buy-button"
  onClick={() => setQty(qty + 1)}
  style={{ backgroundColor: "magenta", color: "white" }}
>
        Buy Now
      </button>
      {/*Show more info on click of a product card. You can use the same product card component and add a state to show/hide the additional info. The additional info can include a description, ratings, and reviews.*/}
      <button onClick={() => setShowInfo(!showInfo)} >More Info</button>
      {showInfo && (
        <MoreInfo />
      )

      }

    </div>
  );
}

export  {ProductCard} ;