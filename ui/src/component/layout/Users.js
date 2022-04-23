import React, { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {   } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Users = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const style = {
    usercontainer: {
      width: "30vw",
      minheight: "100vh",
      display: "flex",
      justifyItem: "spaceBetween",
      border: "1px solid blue",
      borderRadius: "5px",
      margin: "10px",
    },
    avatar: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "1px solid blue",
    },
    info: {
      width: "55%",
      // background: "#0008",
      marginLeft: "10px",
    },
    nav: {
      textDecoration: "none",
    },
  };

  useEffect(() => {
    const userdata = Api.Getusers()
      .then((res) => setData(res))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      helo this is users component
      <div>
        {data &&
          data.map((item) => {
            return (
              <>
                <div
                  style={style.usercontainer}
                  onClick={(e) => navigate("/userdetail", { state: item })}
                  key={item.id}
                >
                  <div>
                    <img
                      style={style.avatar}
                      src={item.profile && item.profile.image}
                      alt={item.avatar}
                    />
                  </div>
                  <div style={style.info}>
                    <p>{item.username}</p>
                    <p>{item.profile && item.profile.profisional}</p>
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


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import { useState,useEffect } from 'react';
// import { Api } from "../service/Api";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     width: 500,
//     height: 450,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const itemData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */
// export default function Users() {
//   const classes = useStyles();
//   const [data, setData] = useState([]);



//   useEffect(() => {
//         const userdata = Api.Getusers()
//           .then((res) => setData(res))
//           .catch((err) => console.log(err.message));
//       }, []);

//   return (
//     <div className={classes.root}>
//       <ImageList rowHeight={180} className={classes.imageList}>
//         <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
//           <ListSubheader component="div">December</ListSubheader>
//         </ImageListItem>
//         {data.map((item) => (
//           <ImageListItem key={item.img}>
//             <img src={item.profile && item.profile.image} alt={item.title} />
           
//             <ImageListItemBar
//               title={item.title}
//               subtitle={<span>by: {item.username} <FontAwesomeIcon icon={faStar}/> </span>}
             

//               actionIcon={
//                 <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
             
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }
