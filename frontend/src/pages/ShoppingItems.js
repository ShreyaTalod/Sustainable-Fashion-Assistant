import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ShoppingItems.css";

// T-shirts
import tshirt1 from "../assets/images/tshirt1.jpg";
import tshirt2 from "../assets/images/tshirt2.jpg";
import tshirt3 from "../assets/images/tshirt3.jpg";
import tshirt4 from "../assets/images/tshirt4.jpg";

// Jeans
import jeans1 from "../assets/images/jeans1.jpg";
import jeans2 from "../assets/images/jeans2.jpg";
import jeans3 from "../assets/images/jeans3.jpg";
import jeans4 from "../assets/images/jeans4.jpg";

// Footwear
import footwear1 from "../assets/images/footwear1.jpg";
import footwear2 from "../assets/images/footwear2.jpg";
import footwear3 from "../assets/images/footwear3.jpg";
import footwear4 from "../assets/images/footwear4.jpg";

// Jackets
import jacket1 from "../assets/images/jacket1.jpg";
import jacket2 from "../assets/images/jacket2.jpg";
import jacket3 from "../assets/images/jacket3.jpg";
import jacket4 from "../assets/images/jacket4.jpg";

// Hats
import hat1 from "../assets/images/hat1.jpg";
import hat2 from "../assets/images/hat2.jpg";
import hat3 from "../assets/images/hat3.jpg";
import hat4 from "../assets/images/hat4.jpg";

// Accessories
import accessory1 from "../assets/images/accessory1.jpg";
import accessory2 from "../assets/images/accessory2.jpg";
import accessory3 from "../assets/images/accessory3.jpg";
import accessory4 from "../assets/images/accessory4.jpg";

// Tote Bags
import tote1 from "../assets/images/tote1.jpg";
import tote2 from "../assets/images/tote2.jpg";
import tote3 from "../assets/images/tote3.jpg";
import tote4 from "../assets/images/tote4.jpg";

// Sunglasses
import sunglasses1 from "../assets/images/sunglasses1.jpg";
import sunglasses2 from "../assets/images/sunglasses2.jpg";
import sunglasses3 from "../assets/images/sunglasses3.jpg";
import sunglasses4 from "../assets/images/sunglasses4.jpg";

const ShoppingItems = () => {
  const { addToCart, addToWishlist } = useContext(CartContext);

  const categories = {
    "Organic T-shirts": [
      { name: "Pastel Green T-shirt", price: "₹499", image: tshirt1 },
      { name: "Sky Blue T-shirt", price: "₹499", image: tshirt2 },
      { name: "Classic White Tee", price: "₹499", image: tshirt3 },
      { name: "Earth Brown T-shirt", price: "₹499", image: tshirt4 },
    ],
    "Recycled Jeans": [
      { name: "Indigo Denim Jeans", price: "₹999", image: jeans1 },
      { name: "Faded Blue Jeans", price: "₹999", image: jeans2 },
      { name: "Dark Wash Jeans", price: "₹999", image: jeans3 },
      { name: "Slim Fit Jeans", price: "₹999", image: jeans4 },
    ],
    "Footwear (Sneakers/Shoes)": [
      { name: "Vegan White Sneakers", price: "₹1299", image: footwear1 },
      { name: "Classic Canvas Shoes", price: "₹1299", image: footwear2 },
      { name: "Eco Suede Sneakers", price: "₹1299", image: footwear3 },
      { name: "Street Style Shoes", price: "₹1299", image: footwear4 },
    ],
    "Vegan Jackets": [
      { name: "Tan Leather Jacket", price: "₹1799", image: jacket1 },
      { name: "Black Moto Jacket", price: "₹1799", image: jacket2 },
      { name: "Olive Bomber Jacket", price: "₹1799", image: jacket3 },
      { name: "Denim Style Jacket", price: "₹1799", image: jacket4 },
    ],
    "Sustainable Hats": [
      { name: "Cork Baseball Cap", price: "₹399", image: hat1 },
      { name: "Wool Beanie", price: "₹399", image: hat2 },
      { name: "Canvas Bucket Hat", price: "₹399", image: hat3 },
      { name: "Recycled Fiber Hat", price: "₹399", image: hat4 },
    ],
    "Eco Accessories": [
      { name: "Wooden Bracelet", price: "₹299", image: accessory1 },
      { name: "Hemp Wallet", price: "₹299", image: accessory2 },
      { name: "Beaded Necklace", price: "₹299", image: accessory3 },
      { name: "Woven Earrings", price: "₹299", image: accessory4 },
    ],
    "Tote Bags": [
      { name: "Natural Canvas Tote", price: "₹299", image: tote1 },
      { name: "Hemp Fiber Tote", price: "₹299", image: tote2 },
      { name: "Printed Eco Tote", price: "₹299", image: tote3 },
      { name: "Foldable Tote Bag", price: "₹299", image: tote4 },
    ],
    "Bamboo Sunglasses": [
      { name: "Classic Bamboo Shades", price: "₹799", image: sunglasses1 },
      { name: "Rounded Eco Glasses", price: "₹799", image: sunglasses2 },
      { name: "Dark Lens Bamboo", price: "₹799", image: sunglasses3 },
      { name: "Vintage Style Bamboo", price: "₹799", image: sunglasses4 },
    ],
  };

  const showAddedMessage = (name) => {
    alert(`${name} added to cart!`);
  };

  return (
    <div className="shopping-container">
      {Object.entries(categories).map(([categoryName, items]) => (
        <div key={categoryName}>
          <h2 className="category-heading">{categoryName}</h2>
          <div className="product-grid">
            {items.map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.image} alt={item.name} className="product-image" />
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    addToCart({ ...item, quantity: 1 });
                    showAddedMessage(item.name);
                  }}
                >
                  Add to Cart
                </button>
                <button
                 className="add-to-wishlist-btn"
                 onClick={() => {
                   addToWishlist(item);
                   alert(`${item.name} added to wishlist!`);
                 }}
                 style={{ marginTop: "8px", backgroundColor: "#ff4081", color: "white" }}
                 >
                   Add to Wishlist ❤️
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingItems;
