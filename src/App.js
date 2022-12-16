import React, { useEffect }  from "react"
import Discount from './components/Discount'
import classes from "./App.module.css"
import { useDispatch } from "react-redux"
import { fetchingAllData } from "./Store/product-actiosn"


function App() {
 const dispatch = useDispatch()
 useEffect(()=> {
 dispatch(fetchingAllData())
 },[dispatch])
  return (
    <div className={classes.center}>
      <h1>Add products</h1>
         <Discount></Discount>
    </div>
  );
}

export default App;
