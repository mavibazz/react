import Card from "../shared/Card"
import Button from "../shared/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useLocalStorage from "../../hooks/useLocalStorage";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useAuth()
    const {setItem} = useLocalStorage("x-auth-token")
      
    const redirect = useNavigate()

    async function loginHandler(e){
        e.preventDefault()

        try{
            const res = await fetch(`https://react-ashy-three.vercel.app/api/login`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
            })
            const data = await res.json()

            if (data !== "invalid") {
                dispatch({type: "setToken", payload: data.token})
                setItem(data.token)
                redirect("/")
            }else if (data === "invalid") {
                alert("Invalid email or password")
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
     <Card>
        <form onSubmit={loginHandler}>
            <div>
                <input type="email" placeholder="Email" onChange={(e)=>{
                    setEmail(e.target.value);
                }} 
                required
                />
            </div>
            <div>
                <input type="password" placeholder="Password" onChange={(e)=>{
                    setPassword(e.target.value);
                }} 
                required
                />
            </div>
            <Button type="submit">Login</Button>
        </form>
     </Card>   
      )
    }

export default Login
