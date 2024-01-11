import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { NavLink } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return(
    <FeedbackProvider>
      <Router>
  <Header />
<div className="container">
<Routes>
  <Route path="/" element={
    <>
    <FeedbackForm  />
<FeedbackStats  />
<FeedbackList />
<Card>
  <NavLink to="/" activeclassname="active">
    Home
  </NavLink>
  <NavLink to="/about" activeclassname="active">
    About
  </NavLink>
</Card>
    </>
  }/>
</Routes>

</div>
</Router>
</FeedbackProvider>
  );
}

export default App;
 