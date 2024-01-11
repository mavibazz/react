import { createContext, useState, useEffect } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuid4 } from "uuid";

const FeedbackContext = createContext(null);

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(()=>{
    getFeedback()
  }, [])

  const getFeedback = async ()=>{
    const response = await fetch('http://localhost:3000/feedback')
    const data = await response.json()
    setFeedback(data);
  }

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await fetch(`http://localhost:3000/feedback/${id}`, {method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const postHandler = async (newFeedBack) => {
    const response = await fetch(`http://localhost:3000/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFeedBack)
    })
    
    const data = await response.json()
    setFeedback([data, ...feedback]);
  };
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  const feedbackEdit = (fitem) => {
    setEditFeedback({
      item: fitem,
      edit: true,
    });
  };
  const updateFeedback =  async (id, updItem) => {
    const response = await fetch(`http://localhost:3000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteHandler,
        postHandler,
        feedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
