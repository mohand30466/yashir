import React from "react";
import "./App.css";
import Main from "./component/layout/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from "./component/layout/Header";
import Signin from "./component/auth/SingIn/SignIn";
import SignUp from "./component/auth/SignUp/SignUp";
import UserProfile from "./component/auth/Userprofile/Userprofile";
import UserAcount from "./component/User/Useraccount";
import Updateaccount from "./component/User/Updateaccount";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./component/useContex/Contex";
import Home from "./component/layout/Home";
import Userdetail from "./component/layout/Userdetail";

function App() {
  let user = "user";

  return (
    <>
      <BrowserRouter>
        <Header />
    

        <AuthProvider user={user}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="account" element={<UserAcount />} />
            <Route path="updateaccount" element={<Updateaccount />} />
            <Route path="home" element={<Home />} />
            <Route path="userdetail" element={<Userdetail />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// <div>
//   <Header />
//   <Switch>

//     <Route exact path="/">
//       <Hero />
//       <MovieList />
//     </Route>

//     <Route exact path="/latest">
//     <Latestmovie/>
//     </Route>
