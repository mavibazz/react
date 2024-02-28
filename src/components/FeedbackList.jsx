import FeedbackItem from "./FeedbackItem"
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackList({handleDelete}) {
  const {feedback} = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }
    return (
    <div>
    {feedback.map((item)=>(
        <FeedbackItem key={item._id} feed= {item} deleteFeedback={handleDelete}/>
    ))}
    </div>
  );
}

export default FeedbackList
