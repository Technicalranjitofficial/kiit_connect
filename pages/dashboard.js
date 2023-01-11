import React from "react";
import connectdb from "../Components/connectdb";
import { getCookie, removeCookies } from "cookies-next";
import Users from "../model/Users";

import Image from "next/image";
// import { redirect } from 'next/dist/server/api-utils';
const jwt = require("jsonwebtoken");

const dashboard = ({ email,displayName,profilePic }) => {
  
  const handleOnLogout = () => {
    removeCookies("token");
    window.open("/","_self");
  };
  const myLoader=({src})=>{
    return profilePic;
  }
  return (
    <div>
      <h1>Dashboard:{displayName}</h1>
      <Image loader={myLoader} src={profilePic} alt="Profile Pic" width={100} height={100}/>
      <button onClick={handleOnLogout}>Logout</button>
      <h1>Login</h1>
    </div>
  );
};

export default dashboard;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("token", { req, res });
    if (!token) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
    await connectdb();
    // console.log(token);
    const verified = jwt.verify(token, "Ranjit");
    // console.log(verified.id);
    const user = await Users.findOne({ _id: verified.id });
    if (!user) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }

     

    return {
      props: {
        email: user.email,
        displayName:user.displayName,
        profilePic:user.profilePic
      },
    };
  } catch (error) {
    console.log(error);
  }
}
