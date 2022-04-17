import React, { useState } from "react";
import { Api } from "../../service/Api";
import { useAuth } from "../../useContex/Contex";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userdata, setUserdata } = useAuth();
  const navigate = useNavigate();

  const Signinclick = async (e) => {
    e.preventDefault();
    const authData = await Api.Login({ username, password }).then((res) => {
      setUserdata(res.user&&res.user.profile.id);
      localStorage.setItem('data', JSON.stringify(res));
      console.log(res.user);
      if (res.token) navigate("/account", { data: res });
      else {
      }
    });
  };
  return (
    <div>
      <p>{userdata && <>{userdata}</>}</p>
      <form onSubmit={Signinclick}>
        <h1>welcome back</h1>
        <label>Username</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="supmit">Sign in</button>
        <br/>
        <Link to={"/signup"}>Dont have account click here</Link>
        <p>{}</p>
      </form>
    </div>
  );
};

export default SignIn;
