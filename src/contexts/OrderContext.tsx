import React, { createContext, ReactNode, useState } from "react";

type OrderContextType = {
  orderItens: orderItemType[]
  addItemToOrder: (itemId: string, title: string, about: string, price: string, amount: number, imageUrls: Array<String>,) => void 
  removeItemToOrder: (id: string, price: string) => void 
  subTotal: number
  setPaymentMethod: (paymentMethod: PaymentProps) => void
  setDeliveryDate: (deliveryDate: string) => void
  setDeliveryLocation: ({street, homeNumber, complement, referencePoint, residenceType, longitude, latitude}: DeliveryLocation ) => void
  paymentMethod: {payment: string, method: string}
  deliveryDate: string
  deliveryLocation: DeliveryLocation
  HandleClearOrder: () => void 
}
type orderItemType = {
  itemId: string
  title: string
  about: string
  price: string
  amount: number
  imageUrls: Array<String>
}
interface DeliveryLocation{
  street: string
  homeNumber: string
  complement?: string
  referencePoint?: string
  residenceType: string
  longitude: number | string
  latitude: number | string
}
interface OrderProviderProps{
  children: ReactNode
}
interface PaymentProps{
  payment: string
  method: string
}


export const OrderContext = createContext({} as OrderContextType)

export function OrderProvider({children} : OrderProviderProps){
  const [ orderItens, setOrderItens ] = useState<orderItemType[]>([])
  const [ subTotal, setSubTotal ] = useState<number>(0)

  const [ paymentMethod, setPaymentMethod ] = useState<PaymentProps>()
  const [ deliveryDate, setDeliveryDate ] = useState('')
  const [ deliveryLocation, setDeliveryLocation ] = useState<DeliveryLocation>()

  function addItemToOrder(
    itemId: string,
    title: string,
    about: string,
    price: string,
    amount: number,
    imageUrls: Array<String>,
  ){
    let wasAdded = false
    orderItens.forEach(testItemId)
    setSubTotal((parseFloat(price) * amount) + subTotal)

    function testItemId(item: orderItemType, index: number){
      if(orderItens[index].itemId == itemId){
        orderItens[index].amount = orderItens[index].amount + amount
        wasAdded = true
      }
    }
    if(!wasAdded){
      setOrderItens([...orderItens ,{
        itemId: itemId,
        title: title,
        about: about,
        price: price,
        amount: (amount || 1),
        imageUrls: imageUrls,
      }])
    }
  }
  function removeItemToOrder(itemId: string, price: string, ){
    orderItens.forEach(testItemId)
    setSubTotal(subTotal - (parseFloat(price)) )

    function testItemId(item: orderItemType, index: number){
      if(orderItens[index].itemId == itemId){
        if(orderItens[index].amount > 1){
          orderItens[index].amount = orderItens[index].amount - 1
        }else{
          orderItens[index].amount = orderItens[index].amount - 1
          orderItens.slice(index, 1)
        }
      }
    }
  }
  function HandleClearOrder(){
    setOrderItens([])
  }
    
  return (
    <OrderContext.Provider value={{
      orderItens,
      addItemToOrder,
      removeItemToOrder,
      subTotal,
      setPaymentMethod,
      setDeliveryDate,
      setDeliveryLocation,
      paymentMethod,
      deliveryDate,
      deliveryLocation,
      HandleClearOrder,
    }}>
      {children}
    </OrderContext.Provider>
  )
}
