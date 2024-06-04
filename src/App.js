import React, { useState } from 'react';
import './App.css'; // Import app.css

const App = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const items = [
    { id: 1, name: 'Item 1', imageUrl: '/images/toys/1.jpeg', price: 10 },
    { id: 2, name: 'Item 2', imageUrl: '/images/toys/2.jpg', price: 20 },
    { id: 3, name: 'Item 3', imageUrl: '/images/toys/3.jpg', price: 50 },
    { id: 4, name: 'Item 4', imageUrl: '/images/toys/4.jpg', price: 70 },
    { id: 5, name: 'Item 5', imageUrl: '/images/toys/5.jpg', price: 90 },
    { id: 6, name: 'Item 6', imageUrl: '/images/toys/6.jpg', price: 10 },
    { id: 7, name: 'Item 7', imageUrl: '/images/toys/7.jpg', price: 120 },
    { id: 8, name: 'Item 8', imageUrl: '/images/toys/8.jpg', price: 150 },
    { id: 9, name: 'Item 9', imageUrl: '/images/toys/9.jpg', price: 170 },
    { id: 10, name: 'Item 10', imageUrl: '/images/toys/10.jpg', price: 5 },
    { id: 11, name: 'Item 11', imageUrl: '/images/toys/11.jpg', price: 270 },
    { id: 12, name: 'Item 12', imageUrl: '/images/toys/12.jpg', price: 90 },
    { id: 13, name: 'Item 13', imageUrl: '/images/toys/13.jpg', price: 35 },
    { id: 14, name: 'Item 14', imageUrl: '/images/toys/14.jpg', price: 45 },
    { id: 15, name: 'Item 15', imageUrl: '/images/toys/15.jpg', price: 87 },
    { id: 16, name: 'Item 16', imageUrl: '/images/toys/16.jpg', price: 99 },
    { id: 17, name: 'Item 17', imageUrl: '/images/toys/17.jpg', price: 107 },
    { id: 18, name: 'Item 18', imageUrl: '/images/toys/18.jpg', price: 45 },
    { id: 19, name: 'Item 19', imageUrl: '/images/toys/19.jpg', price: 99 },
    { id: 20, name: 'Item 20', imageUrl: '/images/toys/20.jpg', price: 100 },

    
    // Add more items here
  ];

  const handleAddToCart = (id, price) => {
    const updatedItems = { ...selectedItems };
    if (updatedItems[id]) {
      updatedItems[id].quantity++;
    } else {
      updatedItems[id] = { quantity: 1, price };
    }
    setSelectedItems(updatedItems);
    setTotalPrice(totalPrice + price);
  };

  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id} className="item">
        <img src={item.imageUrl} alt={item.name} className="item-image" />
        <div className="item-name">{item.name}</div>
        <div className="item-price">Price: ${item.price}</div>
        <button onClick={() => handleAddToCart(item.id, item.price)} className="item-button">Add to Cart</button>
        {selectedItems[item.id] && (
          <div>
            Quantity: {selectedItems[item.id].quantity}
            <button onClick={() => handleAddToCart(item.id, item.price)}>+</button>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Artifixel E-Commerce</h3>
        <h5>Your Destiny for Online Shopping</h5>
      </div>
      <br></br>
      <br></br>
      <div className="item-container">{renderItems()}</div>
      <div className="totals-container">
          Total Items Selected: {Object.keys(selectedItems).length}
          <br />
          Total Price: ${totalPrice.toFixed(2)}
        </div>
        <div className="footer">
        <div className="footer-info">
           &copy; Artifixel Technologies
          <br />
          123-2, Hitech City Road,Hyderabad,India
          <br />
          Phone: +1234567890 | Email: info@artifixeltechnolgies.com
        </div>
        </div>
    </div>
  );
};

export default App;
