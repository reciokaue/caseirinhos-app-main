import React, { useContext } from "react"
import { OrderContext } from "../contexts/OrderContext"

const UseOrder = () => {
  const value = useContext(OrderContext)
  return value
}
export default UseOrder