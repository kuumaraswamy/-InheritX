import React, {  useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addingNewProduct } from '../Store/product-actiosn';



const ProductList = () => {
  const allproduct = useSelector(state =>  state.product.products)
 console.log(allproduct)
  const dispatch = useDispatch()
  const enteredName = useRef('')
  const enteredPrice = useRef('')
  const enteredQuantity = useRef('')
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    quantity: 0
  });





  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = enteredName.current.value;
    const price = enteredPrice.current.value;
    const quantity = enteredQuantity.current.value;

    // const { name, price, quantity } = formData;
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
        id: Math.floor(Math.random() * 100),
        name,
        price,
        quantity,
    
        totalPrice
      };
      dispatch(addingNewProduct(obj))
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



  return (
    <div style={{ margin: '20px', textAlign: 'center' }} >
      
      
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
        <div >
          <label style={{ fontWeight: 'bold' }} >Name : </label>
          <input
            name="name"
            style={{ border: '1px solid #ccc', padding: '8px', margin: '10px 0' }}
            ref={enteredName}
          
          />
        </div>
        <div>
          <label style={{ fontWeight: 'bold' }}>Price : </label>
          <input
            name="price"
            style={{ border: '1px solid #ccc', padding: '10px', margin: '15px 0' }}
            ref={enteredPrice}
          />
        </div>
        <div>
          <label style={{ fontWeight: 'bold' }}>Quantity : </label>
          <input
            name="quantity"
            style={{ border: '1px solid #ccc', padding: '8px', margin: '8px 0' }}
            ref={enteredQuantity}
          />
        </div>
        <div>
          <button type="submit" style={{ border: 'none', backgroundColor: '#333', color: '#fff', padding: '8px 16px' }}>Add To List</button>
        </div>
      </form>
      <table style={{ margin: '20px 0', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Quantity</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Total Price</th>
          </tr >
        </thead>
        <tbody>
           {allproduct?.map((product, index) => (
            <tr key={index} style={{ border: '1px solid gray' }}>
              <td style={{ border: '1px solid gray' }}>{product.name}</td>
              <td style={{ border: '1px solid gray' }}>{product.price}</td>
              <td style={{ border: '1px solid gray' }}>{product.quantity}</td>
              <td style={{ border: '1px solid gray' }}>{product.totalPrice.toFixed(2)}</td>
            </tr>
          ))} 
        </tbody>
      </table>
     
        <button type="button" onClick={handlePlaceOrder} style={{ border: '1px solid gray', borderRadius: '4px', backgroundColor: 'lightgray' }}>Place Order</button>
      
    </div>
  );
}

export default ProductList;