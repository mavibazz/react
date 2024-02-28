import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import FeedbackContext from "../context/FeedbackContext";
import { Link } from "react-router-dom";

function FeedbackForm() {
  const {postHandler, editFeedback, updateFeedback} = useContext(FeedbackContext)
 const [text, setText] = useState("");
 const [btnDisabled, setBtnDisabled] = useState(true)
 const [rating, setRating] = useState("")
 const [message, setMessage] = useState("")
 const [state, dispatch] = useAuth()

 const isAuthenticated = state.accessToken !== null;

 useEffect(()=>{
 if (editFeedback.edit === true) {
  setBtnDisabled(false)
 setText(editFeedback.item.text)
 setRating(editFeedback.item.rating) 
 }
 }, [editFeedback])
 const handleTextChange = (e)=>{
  if (text === '') {
    setBtnDisabled(true);
    setMessage(null);
  }else if (text !== '' && text.trim().length <=10) {
    setBtnDisabled(true);
    setMessage('Feedback must be at least 10 characters long');
  }else{
    setBtnDisabled(false);
    setMessage(null);
  }
    setText(e.target.value)
}
const handleSubmit = (e)=>{
  e.preventDefault()
  if (text.trim().length > 10) {
    const newFeedBack = {
      text: text,
      rating: rating
    }
    if (editFeedback.edit === true) {
      updateFeedback(editFeedback.item._id, newFeedBack)
    }else{
      postHandler(newFeedBack);
    }

    setText("")
  }
}
const postform = <form onSubmit={handleSubmit}>
<h3 className="how">How would you like to rate our sevice?</h3>
<RatingSelect  select={(rating)=> setRating(rating)}/>
<div className="input-group">
<input type="text" placeholder="Write a review" value={text} onChange={handleTextChange}/>
<Button type="submit" isDisabled={btnDisabled} version={"tertiary"}>Submit</Button>
{message && <div>{message}</div>}
</div>
</form>
  return (
    <Card>
        {isAuthenticated ? (postform) :(
          <>
          <div>Please Login to keave a feedback</div>
          <Link to="/login">
          <Button>Login</Button>
          </Link>
          </>
        )}
    </Card>
  )
}

export default FeedbackForm
