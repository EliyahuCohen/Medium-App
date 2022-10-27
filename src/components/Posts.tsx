import React, { useContext, useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { UsersContext } from "../Context/User";
import { IPost, IUser } from "../TypeAndInterfaces/types";
import Post from "./Post";

const Posts = () => {
  const { dispatch } = useContext(UsersContext);

  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const query = "*[_type == 'post']";
  const usersQuery = "*[_type == 'user']";
  const getAllPosts = async () => {
    await client.fetch(query).then((data) => {
      setAllPosts(data);
      dispatch({
        type: "SET_POSTS",
        payload: data,
      });
    });
    await client.fetch(usersQuery).then((data) => {
      setAllUsers(data);
      dispatch({
        type: "SET_USERS",
        payload: data,
      });
    });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="main-content  mb-[150px]">
      {allPosts?.length > 0 && allUsers.length > 0 ? (
        <div className="posts-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
          {allPosts.map((post: IPost) => {
            return <Post key={post._id} post={post} users={allUsers} />;
          })}
        </div>
      ) : (
        <div className="text-center">Loading Posts...</div>
      )}
    </div>
  );
};

export default Posts;
