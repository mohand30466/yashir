import React from "react";
import { useState,useEffect } from "react";
import { Api } from "../../service/Api";
import { useAuth } from "../../useContex/Contex";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [err, seterr] = useState(false);
  const [isMatch,setIsMatch]= useState(false)
  const { userdata, setUserdata } = useAuth();
  const navigate = useNavigate()

 
  useEffect(()=>{
    setIsMatch(password===password2)
  },[isMatch])

  const RegesterClick = async (e) => {

    e.preventDefault();
    
       if(password===password2){
           const signupdata =  await Api.Regester({username,email,password,profile:{is_premium: false}})
           .then(res=>{
             
             
             setUserdata(res.profile.id)
             localStorage.setItem('data', res.profile.id);
           
           
             if(res.id){ 
              seterr(true)
               navigate("/profile")
            }

            })
           .catch(err=>console.log(err))
           
           
       }
      

       
     

  };
  return (
    <div>
      <form onSubmit={RegesterClick}>
        <h1>Welcome Back ,{userdata}</h1>
        <label>Username</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>RebeatPassword</label>
        <br />
        <input
          type="password"
          placeholder="RepeatPassword"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <br />
        <button type="supmit">Regester</button>
        <br/>
        <Link to={"/signin"}>Already have account click here</Link>
        <p>{err?"succesfuly sign up":"Make sure you inter the right informations"}</p>
      </form>
    </div>
  );
};

export default SignUp;
