import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../Store/product-reducer';

const ProductList = () => {
  const allproduct = useSelector(state =>  state.product.products)

 console.log(allproduct.map(item => item))
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    quantity: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, quantity } = formData;
    if (name && price && quantity > 0) {
      let discount = 0;
      if (quantity > 10) {
        discount = 0.05;
      }
      if (quantity > 50) {
        discount = 0.1;
      }
      if (quantity > 90) {
        discount = 0.2;
      }
      const totalPrice = price * quantity * (1 - discount);
      const  obj = {
        name,
        price,
        quantity,
        totalPrice
      };
      dispatch(productAction.addingNewProduct(obj))
      setFormData({
        name: '',
        price: 0,
        quantity: 0
      });
    } else {
      alert('Please enter valid data');
    }
  }

  const handlePlaceOrder = () => {
    localStorage.setItem('products', JSON.stringify(allproduct));
    alert('Order placed successfully');
  }

  const initializeData = () => {
    //const products = JSON.parse(localStorage.getItem('products'));
   
  }

  return (
    <div>
      {allproduct.length === 0 &&
        <button type="button" onClick={initializeData}>Retrieve Data From Local Storage</button>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" >Add To List</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {allproduct.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {allproduct.length > 0 &&
        <button type="button" onClick={handlePlaceOrder}>Place Order</button>
      }
    </div>
  );
}

export default ProductList;