import { useContext } from "react"
import { RequestContext } from "../contexts/RequestContext"

const useRequests = () => {
  const value = useContext(RequestContext)
  return value
}
export default useRequests
