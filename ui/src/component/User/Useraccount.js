import React, { useState } from "react";
import { Api } from "../service/Api";
import { Link } from "react-router-dom";
import "./Useraccount.css";

function UserAcount(props) {
  const data = JSON.parse(localStorage.getItem("data"));
  const url = "http://127.0.0.1:8000";
  const [pass, setpassword] = useState(false);
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [repeatPassword, setrebeatPassword] = useState("");
  const [msg, setMsg] = useState("");
  console.log(data);

  const isMatch = newPassword === repeatPassword;

  const updatePassword = async (e) => {
    e.preventDefault();
    setpassword(!pass);
    if (isMatch && newPassword.length > 2) {
      const updatepass = await Api.ChangePassword(
        { oldPassword: oldPassword, newPassword: newPassword },
        data.user.id
      );
      console.log(updatepass);

      setMsg(updatepass.message);
      setnewPassword("");
      setrebeatPassword("");
    } else {
      setMsg(
        "enter the old password and new pass in order to update you password"
      );
    }
  };

  return (
    <div className="accountcontainer">
      <div className="left">
        <div className="avatarcontainer">
          <div className="avatar">
            <img src={url + data.user.profile.image} alt={data.id} />
          </div>
          <div>
            <p>{data.user.username}</p>
          </div>
        </div>
        <div className="adjectives">
          <div className="profisional">
            <h3>{data.user.profile.profisional}</h3>
          </div>
          <div>
            <p>{data.user ? data.user.profile.bio : data.profile.bio}</p>
          </div>
          <div>
            <button>
              <Link to="/updateaccount">Updata account</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <div>
          <p>{data.user.email}</p>
        </div>
        <div>
          <p>{data.user.profile.phone}</p>
        </div>
        <div>
          <p> {data.user.profile.address}</p>
        </div>

        <div>
          <p>Open to work</p>
        </div>
        <div>
          <p> Rates</p>
        </div>
        <div>
          {pass ? (
            <div>
              <form onSubmit={updatePassword}>
                <div>
                  <input
                    type="password"
                    placeholder="old passeord"
                    onChange={(e) => setoldPassword(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="new passeord"
                    onChange={(e) => setnewPassword(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder=" rebeat new passeord"
                    onChange={(e) => setrebeatPassword(e.target.value)}
                  />
                </div>
              </form>
            </div>
          ) : null}{" "}
          <button type="submit" onClick={updatePassword}>
            {pass ? "Updata password" : "Change Password"}
          </button>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}

export default UserAcount;
