import React, { ButtonHTMLAttributes, FormEvent, useState } from "react";
import { IPost } from "../TypeAndInterfaces/types";

interface SinglePostComments {
  wantedPost: IPost;
}

const Comments = ({ wantedPost }: SinglePostComments) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setloading] = useState(false);
  const [submited, setSubmited] = useState(false);

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    if (name && email && comment) {
      setloading(true);
      setTimeout(() => {
        setloading(false);
        setSubmited(true);
      }, 1000);
    }
  };
  if (!submited) {
    return (
      <div>
        <p className="text-yellow-400 text-lg">Enjoyed this ariticle?</p>
        <h1 className="text-[25px] font-semibold">Leave a comment below!</h1>
        <form className="mt-2 flex  flex-col" onSubmit={onSubmitForm}>
          <label htmlFor="1" className="font-semibold text-lg">
            Name
          </label>
          <input
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="1"
            value={name}
            className="border outline-none py-1 mb-5 px-2"
            placeholder="John Appleseed"
          />{" "}
          <label htmlFor="2" className="font-semibold text-lg">
            Email
          </label>
          <input
            value={email}
            name="email"
            placeholder="your@gmail.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="2"
            className="border outline-none py-1 mb-5 px-2"
          />{" "}
          <label htmlFor="3" className="font-semibold text-lg">
            Comment
          </label>
          <textarea
            value={comment}
            name="comment"
            placeholder="Enter some long form content"
            id="3"
            onChange={(e) => setComment(e.target.value)}
            className="border outline-none py-1 mb-5 px-2"
          />
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 text-white font-semibold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="py-5 px-3 bg-yellow-500 text-white font-bold text-center ">
        <h1 className="text-[32px]">Thank you for submitting your comment!</h1>
        <p>Once it has been approved it will appear bellow</p>
      </div>
    );
  }
};

export default Comments;
