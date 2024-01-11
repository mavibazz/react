import PropTypes from "prop-types"
function Header({text,bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        textAlign:"center",
    }
  return (
    <div style={headerStyles}> 
      <h1>{text}</h1>    
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
