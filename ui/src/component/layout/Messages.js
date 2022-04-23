import React, { useState, useEffect } from "react";
// import { Api } from "../../service/Api";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useLocation } from "react-router";
import { Api } from "../service/Api";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function componentName() {
  const db = JSON.parse(localStorage.getItem("data"));
  const user =db.user.id
  const classes = useStyles();
  const [msg, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [msgData, setMsgData] = useState([]);
  const {state}= useLocation()
  const profile = state.profile_id
  const reciver = state.user_id
  const messages = state.messages
  // console.log(profile,"this is the profile id",user);
console.log(reciver);
  const SendMsgclick = (e) => {
    e.preventDefault();
    const messges = Api.Messages({user,profile,msg})
    .then(res=>{
      console.log(res)
      setData(res)
    })
    .catch(err=>console.log(err))
  
    
  };  


useEffect(() => {
  const messges = Api.GetMessages()
  .then(res=>{
    setMsgData(res)
    
  })
  .catch(err=>console.log(err))
  
}, [data])


  return (
    <>
 
      <Container>
        <Typography>Hello and wlcome to messages</Typography>
        <form className={classes.form} onSubmit={SendMsgclick} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="message"
            label="Messages"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
        <Typography>
          {msgData&&msgData.map(item=>
            {
              if (item.profile===profile&item.user===reciver|user) {
                return <p style={item.user==db.user.id?{color:"green"}:{color:"blue"}}>{item.msg}</p>
                
              }
              else{
                return <p></p>
              }

            })}


        </Typography>
      </Container>
    </>
  );
}
