import Card from "./shared/Card";
import {BsXOctagon, BsPencilSquare} from "react-icons/bs"
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
function FeedbackItem({feed}) {
  const {deleteHandler, feedbackEdit} = useContext(FeedbackContext)
  const [state, dispatch] = useAuth()

  const isAuthenticated = state.accessToken !== null

  const prop = <>
  <button className="close" onClick={()=> deleteHandler(feed._id)}>
  <BsXOctagon />
</button>
<button className="edit" onClick={() =>feedbackEdit(feed)}>
  <BsPencilSquare />
</button>
</>
return (
<Card>
{isAuthenticated && prop}
<div className="num-display">{feed.rating}</div>
<div className="text-display">{feed.text}</div>
<div className="text-display">{feed.genre}</div>

</Card>
)
}

export default FeedbackItem;
