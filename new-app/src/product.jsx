import  { useState } from "react";

function ProductCard({ title, price, image }) {
  const [qty, setQty] = useState(0);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <p>Qty: {qty}</p>
      <button
        className="buy-button"
        onClick={() => setQty(qty + 1)}
      >
        Buy Now
      </button>
    </div>
  );
}

export  {ProductCard} ;