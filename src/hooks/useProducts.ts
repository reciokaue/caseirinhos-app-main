import { useEffect, useState } from "react"
import { database } from '../services/firebase'
import { LogBox } from 'react-native';

export type ProductType = {
  id: string
  title: string
  about: string
  price: string
  amount: number 
  img:{
    url: Array<String>
    reference: Array<String>
  }
}

export function useProducts(){
  const [ products, setProducts ] = useState<ProductType[]>([])
  LogBox.ignoreLogs(['Setting a timer']);
  
  useEffect(() => {
    const productsRef = database.ref('products/')
    
    productsRef.on('value', product =>{
      const data = product.val()
      const parsedProducts = Object.entries(data).map(([key, value]) =>{
        return{
          id: key,
          title: value.title,
          about: value.about,
          price: value.price,
          img:{
            url: value.img.url,
            reference: value.img.reference,
          }
      }
      })

      setProducts(parsedProducts)
    })
  },[])
  return{
    products
  }
}