import React from "react";
import { useNavigate } from "react-router-dom";


const StyleCss = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <button className="btn btn-primary w-100 mb-2" onClick={()=> navigate(`/posts/${props.post.id}`)}>View</button>
          <button className="btn btn-danger w-100" onClick={()=> props.remove(props.post)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default StyleCss;
