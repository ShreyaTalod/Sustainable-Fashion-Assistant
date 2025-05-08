import React from "react";
import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./ShoppingItems.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const [selectedSizes, setSelectedSizes] = useState({});

  const categories = {
    "Organic T-shirts": [
      { name: "Off-White T-shirt", price: "₹499", image: tshirt1 },
      { name: "Pastel pink T-shirt", price: "₹499", image: tshirt2 },
      { name: "Sky blue Tee", price: "₹499", image: tshirt3 },
      { name: "Pastel Green T-shirt", price: "₹499", image: tshirt4 },
    ],
    "Recycled Jeans": [
      { name: "Blue Denim Jeans", price: "₹999", image: jeans1 },
      { name: "Faded Blue Jeans", price: "₹999", image: jeans2 },
      { name: "Beige Denim Jeans", price: "₹999", image: jeans3 },
      { name: "Dark Washed Jeans", price: "₹999", image: jeans4 },
    ],
    "Footwear (Sneakers/Shoes)": [
      { name: "Vegan Canvas Sneakers", price: "₹1299", image: footwear1 },
      { name: "Classic Canvas Shoes", price: "₹1299", image: footwear2 },
      { name: "Eco Suede Sneakers", price: "₹1299", image: footwear3 },
      { name: "Street Style Shoes", price: "₹1299", image: footwear4 },
    ],
    "Vegan Jackets": [
      { name: "Green Leather Jacket", price: "₹1799", image: jacket1 },
      { name: "Natural Beige Jacket", price: "₹1799", image: jacket2 },
      { name: "Lovely Pink Jacket", price: "₹1799", image: jacket3 },
      { name: "Black Leather Jacket", price: "₹1799", image: jacket4 },
    ],
    "Sustainable Hats": [
      { name: "Wool Beanie", price: "₹399", image: hat1 },
      { name: "Canvas Bucket Hat", price: "₹399", image: hat2 },
      { name: "Recycled Lavender Hat", price: "₹399", image: hat3 },
      { name: "Recycled Fiber Hat", price: "₹399", image: hat4 },
    ],
    "Eco Accessories": [
      { name: "Eco Scarf", price: "₹299", image: accessory1 },
      { name: "Hemp Wallet", price: "₹299", image: accessory2 },
      { name: "Woven Wristband", price: "₹299", image: accessory3 },
      { name: "Eco Towel", price: "₹299", image: accessory4 },
    ],
    "Tote Bags": [
      { name: "Natural Canvas Tote", price: "₹299", image: tote1 },
      { name: "Hemp Fiber Tote", price: "₹299", image: tote2 },
      { name: "Printed Eco Tote", price: "₹299", image: tote3 },
      { name: "Foldable Tote Bag", price: "₹299", image: tote4 },
    ],
    "Bamboo Sunglasses": [
      { name: "Classic Bamboo Shades", price: "₹799", image: sunglasses1 },
      { name: "Dark Lens Glasses", price: "₹799", image: sunglasses2 },
      { name: "Classic Eco Bamboo", price: "₹799", image: sunglasses3 },
      { name: "Vintage Style Bamboo", price: "₹799", image: sunglasses4 },
    ],
  };

  
  const sizes = ["XS", "S", "M", "L"];

  const handleSizeChange = (itemName, size) => {
    setSelectedSizes(prev => ({ ...prev, [itemName]: size }));
  };

  const handleAddToCart = (item) => {
    const size = selectedSizes[item.name];
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...item, size, quantity: 1 });
    alert(`${item.name} (Size: ${size}) added to cart!`);
  };

  const isWishlisted = (item) => wishlist.some(w => w.name === item.name);

  return (
    <div className="shopping-container">
      {Object.entries(categories).map(([categoryName, items]) => (
        <div key={categoryName}>
          <h2 className="category-heading">{categoryName}</h2>
          <div className="product-grid">
            {items.map((item, index) => (
              <div key={index} className="product-card">
                <div className="wishlist-icon" onClick={() => toggleWishlist(item)}>
                  {isWishlisted(item) ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart color="gray" />
                  )}
                </div>

                <img src={item.image} alt={item.name} className="product-image" />
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>

                <div className="size-selector">
                  <label>Select Size: </label>
                  {sizes.map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSizes[item.name] === size ? "selected" : ""}`}
                      onClick={() => handleSizeChange(item.name, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                  Add to Cart
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



