
import React, { useState } from "react";
import { useAuth } from "../useContex/Contex";
import { Api } from "../service/Api";


function Updateaccount() {

 
    const rememberMe = JSON.parse(localStorage.getItem('data'))

  const [image, setImage] = useState();
  const [address, setAddress] = useState(rememberMe.user.profile.address);
  const [phone, setPhone] = useState(rememberMe.user.profile.phone);
  const [profisional, setProfisional] = useState(rememberMe.user.profile.profisional);
  const [bio, setBio] = useState(rememberMe.user.profile.bio);



console.log(rememberMe.user.profile.id);
const profileID = rememberMe.user.profile.id

  const UserProfileClick = async (e) => {
    e.preventDefault();
    const uploadAvatar = new FormData();
    uploadAvatar.append("image", image?image:'avatar.png');
    uploadAvatar.append("address", address);
    uploadAvatar.append("phone", phone);
    uploadAvatar.append("profisional", profisional);
    uploadAvatar.append("bio", bio);

    const profile = await Api.UpdateUserProfile(profileID, uploadAvatar)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message))
    
  };

  return (
    <div>
      <h1>
        welcome set up your profile,{rememberMe&&rememberMe.user.profile.id}
        <p>to update your account you have to update your avatar </p>
      </h1>
      <form onSubmit={UserProfileClick}>
        <label>Phone</label>
        <br />
        <input type="file"
        
         onChange={(e) => setImage(e.target.files[0])} />

        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <br />
        <br />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <br />
        <br />
        <input
          type="text"
          value={profisional}
          onChange={(e) => setProfisional(e.target.value)}
          placeholder="Profisional"
        />
        <br />
        <br />
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <br />

        <button type="supmit">Submit</button>
      </form>
    </div>
  );
}



export default Updateaccount;




  

  
  

