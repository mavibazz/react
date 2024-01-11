import Card from "./shared/Card";
import {BsXOctagon, BsPencilSquare} from "react-icons/bs"
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackItem({feed}) {
  const {deleteHandler, feedbackEdit} = useContext(FeedbackContext)
return (
<Card>
<div className="num-display">{feed.rating}</div>
<button className="close" onClick={()=> deleteHandler(feed.id)}>
  <BsXOctagon />
</button>
<button className="edit" onClick={() =>feedbackEdit(feed)}>
  <BsPencilSquare />
</button>
<div className="text-display">{feed.text}</div>
<div className="text-display">{feed.genre}</div>
</Card>
)
}

export default FeedbackItem;
