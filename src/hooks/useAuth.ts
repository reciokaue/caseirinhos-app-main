import { useContext } from "react"
import { AuthFirebaseContext } from "../contexts/authFirebaseContext"

const UseAuthFirebase = () => {
  const value = useContext(AuthFirebaseContext)
  return value
}
export default UseAuthFirebase