import React, { useState } from "react";
import { useAuth } from "../../useContex/Contex";
import { Api } from "../../service/Api";
import { useLocation } from "react-router";

const UserProfile = () => {
  const [image, setImage] = useState();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [profisional, setProfisional] = useState("");
  const [bio, setBio] = useState("");
  const { userdata } = useAuth();
  const { state } = useLocation();
  const rememberMe = JSON.parse(localStorage.getItem('data'))

  const UserProfileClick = async (e) => {
    e.preventDefault();
    const uploadAvatar = new FormData();

    uploadAvatar.append("image", image, image.name);
    uploadAvatar.append("address", address);
    uploadAvatar.append("phone", phone);
    uploadAvatar.append("profisional", profisional);
    uploadAvatar.append("bio", bio);

    const profile = await Api.UpdateUserProfile(rememberMe.user.id, uploadAvatar)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>
        welcome set up your profile,{rememberMe&&rememberMe.user.profile.id},{rememberMe&&rememberMe.user.username}
      </h1>
      <form onSubmit={UserProfileClick}>
        <label>Phone</label>
        <br />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <br />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setProfisional(e.target.value)}
          placeholder="Profisional"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <br />

        <button type="supmit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfile;
