import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({ create, reject }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    create(newPost);
    setTitle("");
    setBody("");
  }

  return (
    <form>
      <h2 className="text-center mb-3">Create Post</h2>
      <MyInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title post"
        className="mb-2 w-100 p-1"
      />
      <MyInput
        value={body}
        className="w-100 p-1"
        onChange={(e) => setBody(e.target.value)}
        type="text"
        placeholder="Description post"
      />
      <div className="w-100 d-flex mt-3">
        <MyButton
          bootsrtap_classes="btn btn-success me-2 ps-4 pe-4"
          onClick={addNewPost}
        >
          Save Post
        </MyButton>
        <MyButton
          bootsrtap_classes="btn btn-outline-danger ps-4 pe-4"
          onClick={reject}
        >
          Reject
        </MyButton>
      </div>
    </form>
  );
}
