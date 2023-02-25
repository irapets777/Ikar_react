import React, { useEffect, useState } from "react";
import "../styles/App.css";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

function Posts() {
  const [posts, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll();
    setPost(response);
  });

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  const createPost = (newPost) => {
    setPost([newPost, ...posts]);
    setModal(false);
  };

  const hiddenModal = (e) => {
    e.preventDefault();
    setModal(false);
  };
  const removePost = (post) => {
    setPost(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5 mt-3 d-flex justify-content-center">
            <img src={require("../img/react_logo.gif")} alt="logo" />
          </div>
          <div className="col-12 d-flex">
            <button onClick={fetchPosts} className="btn btn-success me-2">
              Get Post From Server
            </button>
            <button onClick={(e) => setModal(true)} className="btn btn-primary">
              Create Post
            </button>
          </div>
          <MyModal visible={modal} setVisible={hiddenModal}>
            <PostForm create={createPost} reject={hiddenModal} />
          </MyModal>
          <hr style={{ margin: "15px 0" }} />
          <PostFilter filter={filter} setFilter={setFilter} />
          {postError && <h1>Error: {postError}</h1>}
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Loader />
            </div>
          ) : (
            <PostsList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title="Posts List"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
