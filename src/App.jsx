import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { NavLink } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import AuthProvider from "./context/AuthContext";
import RegisterPage from "./components/pages/RegisterPage";
import Login from "./components/pages/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const {getItem} = useLocalStorage("x-auth-token")
  const token = getItem()
  let authInitialState ={accessToken: token ?? null}

  return(
   <AuthProvider defaultState={authInitialState}>
     <FeedbackProvider>
      <Router>
  <Header />
<div className="container">
<Routes>
  <Route path="/register" element={<RegisterPage />}/>
  <Route path="/login" element={<Login />}/>
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
   </AuthProvider>
  );
}

export default App;
 