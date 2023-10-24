import React, { useState, useEffect } from 'react';

export default function Sports() {
const [newsData, setNewsData] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  const newsAsia = async () => {
    setIsLoading(true);
    try {
      let response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b8007340b16543c999d9ea84a7561603');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      setNewsData(data.articles);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setIsLoading(false);
    }
  };

  newsAsia();
}, []);

return (
  
  <div>
     <h1>Asia News</h1>
    {isLoading ? (
        <div className="d-flex justify-content-center">
        <div className="spinner-grow text-primary" role="status">
 <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-info" role="status">
 <span className="sr-only">Loading...</span>
 </div>
 <div className="spinner-grow text-danger" role="status">
 <span className="sr-only">Loading...</span>
</div>
      </div>
    ) : (
      <div className="container-fluid">
        <div className="row">
          {newsData.map((article, index) => (
            <div key={index} className="col-sm-4">
              <div className="card mb-3">
                <img 
                src={article.urlToImage?article.urlToImage:'No Image'}
                 className="card-img-top" 
                 alt="News" />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);
}
