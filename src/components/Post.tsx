import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { IPost, IUser } from "../TypeAndInterfaces/types";
import { Link, useParams } from "react-router-dom";
const Post = ({ post, users }: { post: IPost; users: IUser[] }) => {
  const user = users.filter((one) => one._id == post.postedBy._ref)[0];

  return (
    <Link to={`posts/${post._id}`}>
      <div className="group cursor-pointer border rounded-lg overflow-hidden ">
        <img
          className="h-60 w-full object-cover  transition-transform duration-200 ease-in-out"
          src={`${urlFor(post.image)}`}
          alt={post.title}
        />
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p className="text-lg font-bold capitalize text-ellipsis">
              {post.title}
            </p>
            <p className="text-xs text-ellipsis">{post.subtitle}</p>
          </div>
          <img
            className="h-12 w-12 rounded-full"
            src={user.image}
            alt={post.postedBy._ref}
          />
        </div>
      </div>
    </Link>
  );
};

export default Post;
