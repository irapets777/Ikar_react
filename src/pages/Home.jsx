import React, {useState, useEffect} from 'react'

const Home = () => {
  let [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    console.log(news);
  }, [news]);

  const BASE_URL = "https://admin.ikar-thinktank.org/api";
  const getNews = async () => {
    await fetch(`${BASE_URL}/news`)
      .then((response) => response.json())
      .then((res) => {
        const CLEARED_DATA = res.data.map((item) => {
          return {
            id: item.id,
            ...item.attributes,
          };
        });
        setNews(CLEARED_DATA);
      });
  };

  return (
    <>
      <div>Home</div>
      {news.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;


