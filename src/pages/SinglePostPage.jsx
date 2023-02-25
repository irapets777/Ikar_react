import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";

const SinglePostPage = () => {
  const [post, setPost] = useState({});

  const params = useParams();
  const [fetchPostById, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response);
  });

  useEffect(() => {
    fetchPostById();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {postError && <h1>Error {postError}</h1>}
      {isLoading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div>
          <h1>SinglePostPage id = {params.id}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePostPage;
