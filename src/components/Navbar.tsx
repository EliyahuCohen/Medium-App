import React, { useContext, useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Logo from "../assets/medium1.png";
import { Link } from "react-router-dom";
import { client } from "../client";
import jwtDecode from "jwt-decode";
import { UsersContext } from "../Context/User";
import { IUser } from "../TypeAndInterfaces/types";

const Navbar = () => {
  const { theUser, dispatch } = useContext(UsersContext);
  const [following, setfollowing] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("follow") == undefined ||
      localStorage.getItem("follow") == null
    ) {
      setfollowing(false);
      localStorage.setItem("follow", JSON.stringify(false));
    } else {
      setfollowing(JSON.parse(localStorage.getItem("follow")!));
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={Logo} alt="app logo" />
        </Link>
        <Link to="">About</Link>
        <Link
          to=""
          onClick={() => {
            setfollowing((prev) => {
              return !prev;
            });
            localStorage.setItem("follow", JSON.stringify(!following));
          }}
          className="special-link"
        >
          {following ? "Following" : "Follow"}
        </Link>
      </div>
      <div className="navbar-right">
        {theUser == null ? (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const res: any = jwtDecode(`${credentialResponse.credential}`);
              client
                .createIfNotExists({
                  _id: res.sub,
                  _type: "user",
                  username: res.name,
                  image: res.picture,
                })
                .then((res) => {
                  dispatch({
                    type: "SET_USER",
                    payload: res,
                  });
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        ) : (
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="logout-btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: "LOG_OUT",
                });
              }}
            >
              Log Out
            </button>
            <img
              src={theUser.image}
              alt={theUser.username}
              height={50}
              width={50}
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
