import React, { useState, useEffect } from 'react';
import "./coins.css"
import axios from 'axios';
import Card from '../../components/Card';

const Coins =()=>{
      const [posts, setPosts] = useState([]);
      const [inputText, setInputText] = useState("");

      useEffect(() => {
            axios.get('https://api.coingecko.com/api/v3/coins/list')
              .then(response => {
                setPosts(response.data);
              })
              .catch(error => {
                console.error(error);
              });
          }, []);
      
      useEffect(() => { 
            if(inputText.length !== ""){
                  axios.get(`https://api.coingecko.com/api/v3/search?query=${inputText}`)
                  .then(response => {
                     setPosts(response.data.coins);
                  })
                  .catch(error => {
                     console.error(error);
                  });
            }
          }, [inputText]);

      const handleSubmit = (e) => {
            var lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
      }

      return (
            <div className="title">
                  <div className="titletext">
                        AVAILABLE COINS
                  </div>
                  <div className="add-post-container">
                        <input type="text" className="searchText" onChange={handleSubmit}/>
                  </div>
                  <div className="container-card">
                              {posts ? posts.slice(0, 10).map(post => (
                              <Card props={post} />
                              )) : 'Loading...'}
                  </div>
            </div>


      )
}
export default Coins;