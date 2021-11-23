import { useEffect, useState } from "react"
import { database } from '../services/firebase'
import { LogBox } from 'react-native';

interface dayType{
  id: string
  start: string
  end: string
  step: string
  ableHours: Array<String>
}

export function useDates(){
  const [ dates, setDates ] = useState<dayType[]>([])
  LogBox.ignoreLogs(['Setting a timer']);
  
  useEffect(() => {
    const productsRef = database.ref('dates/')

    productsRef.on('value', product =>{
      const data = product.val()
      const parsedDates = Object.entries(data).map(([key, value]) =>{
        return{
          id: key,
          start: value.start,
          end: value.end,
          step: value.step,
          ableHours: value.ableDates
      }})
      setDates(parsedDates)
    })
  },[])
  return{
    dates
  }
}