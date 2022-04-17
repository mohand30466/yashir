import React, { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faHeart,
  faThumbsUp,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import Users from "./Users";

export default function Home() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [tittle, setTittle] = useState();
  const [discription, setDiscription] = useState();
  const [image, setImage] = useState();
  const db = JSON.parse(localStorage.getItem("data"));
  const id = db.user.id;

  const style = {
    width: "37.5vw",
    height: "35vh",

    bostContainer: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      overFlow: "hidden",
    },

    postCpntainer: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "38vw",
      Height: "50vh",
      justifyContent: "center",
      alignItem: "center",
      background: "#8888",
      border: "red 2px solid",
      overFlow: "hidden",
      margen: "10px",
    },
    post: {
      display: "flex",
      width: "37.5vw",
      margen: "10px",
      justifyContent: "center",
      alignItem: "center",
      background: "#00001",
      color: "red",
      border: "red 1px solid",
      flexDirection: "column",
    },
    create: {
      width: "40vw",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
    },
    rate: {
      display: "flex",
      width: "400px",
      height: "100px",
      justifyContent: "center",
    },
    fontAwsome: {
      color: "blue",
      fontSize: "3rem",
      margin: "10px",
    },
    userpro: {
      width: "30vw",
      height: "100vh",
      background: "#00001",
    }
  };

  useEffect(() => {
    const bostData = Api.GetBosts()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const openPostWindow = () => setOpen(!open);

  const postSubmit = (e) => {
    e.preventDefault();
    const uploadidata = new FormData();
    uploadidata.append("image", image, image.name);
    uploadidata.append("tittle", tittle);
    uploadidata.append("discription", discription);

    const post = Api.Bost(id, uploadidata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div style={style.bostContainer}>
      <div>
        <Users />
      </div>
      <div>
        <div>
          <div>
            <span>Create Bost </span>
            <FontAwesomeIcon icon={faSquarePlus} onClick={openPostWindow} />
          </div>
          {open ? (
            <div style={style.create}>
              <form onSubmit={postSubmit}>
                <input
                  type="text"
                  onChange={(e) => setTittle(e.target.value)}
                  placeholder="job tittle"
                />
                <input
                  type="text"
                  onChange={(e) => setDiscription(e.target.value)}
                  placeholder="job discription"
                />
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <input type="submit" title="Submit" />
              </form>
            </div>
          ) : null}
        </div>

        <div style={style.postCpntainer}>
          <h1> Bost lists</h1>

          {data &&
            data.map((item) => {
              return (
                <>
                  <div style={style.post} key={item.id}>
                    <h1>{item.tittle}</h1>
                    <p>{item.discription}</p>
                    <img style={style} src={item.image} alt="#" />
                    <div style={style.rate}>
                      <FontAwesomeIcon
                        style={style.fontAwsome}
                        icon={faHeart}
                      />
                      <FontAwesomeIcon
                        style={style.fontAwsome}
                        icon={faThumbsUp}
                      />
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div style={style.userpro}>user properiteis</div>
    </div>
  );
}
