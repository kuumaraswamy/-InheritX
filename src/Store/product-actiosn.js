import { productAction } from "./product-reducer"
import axios from "axios"

export const fetchingAllData =  () => {
    return async(dispatch) => {
        const fetchdata = async() => {
            console.log('hello')
            try{
               const res = await axios.get('https://crudcrud.com/api/1884797495574456b0541e5e629dbbf6/products')
            
              return res.data
            }
            catch(err){
                console.log(err)
            }
        }
        const data = await fetchdata()
        dispatch(productAction.allProducts(data))
    }
}

export const addingNewProduct =  (obj) => {
    return async(dispatch) => {
        const addProduct = async() => {
            console.log('hello')
            try{
               const res = await axios.post('https://crudcrud.com/api/1884797495574456b0541e5e629dbbf6/products', obj)
            
              return res.data
            }
            catch(err){
                console.log(err)
            }
        }
        await addProduct()
        dispatch(productAction.addingNewProduct(obj))
    }
}
