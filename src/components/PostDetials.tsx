import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { urlFor } from "../client";
import { UsersContext } from "../Context/User";
import { IPost } from "../TypeAndInterfaces/types";
import Comments from "./Comments";
const PostDetials = () => {
  const { id } = useParams();
  const { posts, users, theUser } = useContext(UsersContext);
  const wantedPost: IPost = posts.filter((one: any) => one._id == id)[0];
  const wantedUser = users.filter(
    (one: any) => one._id == wantedPost.postedBy._ref
  )[0];

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center mb-3">{wantedPost.title}</h1>
      <h1 className="text-gray-500 text-center">{wantedPost.subtitle}</h1>
      <p className=" text-center">
        This post was created at {wantedPost._createdAt}
      </p>
      <div className="w-[50px] mt-5 h-[2px] bg-black rounded-full mb-5 m-auto" />
      <div className="flex items-center">
        <img
          src={`${wantedUser.image}`}
          alt="user logo"
          className="h-[40px] w-[40px] rounded-full mb-3 mt-3"
        />
        <h2 className="ml-2">{wantedUser.username}</h2>
      </div>
      <img src={`${urlFor(wantedPost.image)}`} alt="" />
      <div className="w-[50px] mt-5 h-[2px] bg-black rounded-full mb-5 m-auto" />
      <h1 className="font-bolder text-3xl mb-3 ">About</h1>
      <div className="mb-20">
        <p className="main-context-text">{wantedPost.maincontent}</p>
      </div>
      <div className="w-[50px] mt-5 h-[2px] bg-black rounded-full mb-5 m-auto" />
      <div className="comments-section">
        {theUser ? (
          <Comments wantedPost={wantedPost} />
        ) : (
          <h1 className="text-center font-semibold">
            Log in or Sign up to comment!
          </h1>
        )}
      </div>
      <div className="w-[50px] mt-5 h-[2px] bg-black rounded-full mb-5 m-auto" />
    </div>
  );
};

export default PostDetials;
