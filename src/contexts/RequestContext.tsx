import React, { createContext, ReactNode, useState } from "react";

interface RequestContextType{
  request: Array<RequestType>
  setRequest: (request: Array<RequestType>) => void
}
interface RequestType{
  id: string
  author: string
  deliveryPlace: {
    complement: string
    homeNumber: string
    latitude: string
    longitude: string
    referencePoint: string
    residenceType: string
    street: string
  }
  paymenthMethod: {
    method: string
    paymenth: string
  }
  items: Array<ProductType>
  total: string
  deliveryDate: string
  whenDone: string
}
interface ProductType{
  id: string;
  title: string;
  about: string;
  price: string;
  amount: number
  img: {
      url: String[];
      reference: String[];
  };
}
interface RequestProviderProps{
  children: ReactNode
}


export const RequestContext = createContext({} as RequestContextType)

export function RequestProvider({children} : RequestProviderProps){
  const [ request, setRequest ] = useState<RequestType[]>([])
    
  return (
    <RequestContext.Provider value={{
      request,
      setRequest
    }}>
      {children}
    </RequestContext.Provider>
  )
}
