import PropTypes from "prop-types"
import { useAuth } from "../context/AuthContext"
import useLocalStorage from "../hooks/useLocalStorage"
function Header({text,bgColor, textColor}) {
  const [state,dispatch] = useAuth()
  const {deleteItem} = useLocalStorage("x-auth-token")

  const isAuthenticated = state.accessToken !==null

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign:"center",
    }
    function logout(){
      deleteItem()
      dispatch({type: "setToken", payload: null})
    }
  return (
    <div style={headerStyles}> 
      <h1>{text}</h1>  
      {isAuthenticated && <button onClick={logout}>Logout</button>}  
    </div>
  )
}

Header.defaultProps = {
    text: "My Feedback Header",
    bgColor: "purple",
    textColor:"yellow"
  }
  Header.propTypes = {
    text: PropTypes.string
  }
export default Header
