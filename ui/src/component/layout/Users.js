import React, { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const Users = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const style = {
    usercontainer: {
      width: "30vw",
      minheight: "100vh",
      display: "flex",
      justifyItem: "spaceBetween",
      border: "1px solid red",
      borderRadius: "5px",
      margin: "10px",
    },
    avatar: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "1px solid red",
    },
    info: {
      width: "55%",
      background: "#0008",
      marginLeft: "10px",
    },
    nav:{
        textDecoration:"none"

    }
  };

  useEffect(() => {
    const userdata = Api.Getusers()
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(data);

  return (
    <div>
      helo this is users component
      <div>
        {data &&
          data.map((item) => {
            return (
              <>
                
                  <div style={style.usercontainer} onClick={e=>navigate("/userdetail",{state:item})}>
                    <div>
                      <img style={style.avatar} src={item.profile.image} />
                    </div>
                    <div style={style.info}>
                      <p>{item.username}</p>
                      <p>{item.profile.profisional}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
               
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
