import React, { useRef, useState } from "react";
import "./Register.scss";
import request from "../../utils/request";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebaseConfig";

function Register() {
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const countryRef = useRef("");
  const phoneRef = useRef("");
  const descRef = useRef("");
  const fileRef = useRef(null);

  const [imgUpload, setImgUpload] = useState("");

  const imageUpload = async () => {
    if (fileRef.current && fileRef.current.files.length > 0) {
      const file = fileRef.current.files[0];
      const imageRef = ref(storage, `fiverr-clone/images/${file.name}`);

      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      setImgUpload(downloadURL);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await imageUpload();

    try {
      await request.post("/auth/signup", {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        img: imgUpload,
        country: countryRef.current.value,
        phone: phoneRef.current.value,
        desc: descRef.current.value,
      });

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="johndoe"
            ref={usernameRef}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            ref={emailRef}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            ref={passwordRef}
          />
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            id="profilePicture"
            type="file"
            onChange={imageUpload}
            ref={fileRef}
          />
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Usa"
            ref={countryRef}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="sellerAccount">Activate the seller account</label>
            <label className="switch">
              <input id="sellerAccount" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phone"
            type="number"
            placeholder="+91 934 567 6789"
            ref={phoneRef}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="A short description of yourself"
            name="desc"
            cols="30"
            rows="10"
            ref={descRef}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
