import React, { useEffect, useState } from "react";
import styles from "../styles/StudentPage.module.css";
import PostCard from "../components/PostCards";

const Student = () => {
  //1. Create a state variable to store the posts
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(false);
  
  // On mount, fetch the posts
  useEffect(() => {
    getPosts();
  }, []);

  // Log the loading state
  useEffect(() => {
    console.log("Loading: ", loading);
  }, [loading]);


  //2. Create a function to fetch the posts from the API
  async function getPosts() {
    setLoading(true);
    const DATA = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        return data;
      });
    //3. Set the posts state variable to the data
    setPosts(DATA);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.title}>Student Page</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              aut rem, laudantium quia veritatis minima esse iure eos at officia
              odit corporis ab sint repellendus sit eius quibusdam officiis
              possimus!
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="container">      
            <div className="row">
              <div className="col-12">
                {/* Display posts */}
                {posts.map((post) => {
                  return (
                    <PostCard post={post} key={post.id}/>
                  );
                })}
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Student;
