import React, { useState, useEffect } from 'react';
import "./coins.css"
import axios from 'axios';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

const Coins =()=>{
      const [posts, setPosts] = useState([]);
      const [inputText, setInputText] = useState("");
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            setLoading(true)
            axios.get('https://api.coingecko.com/api/v3/coins/list')
              .then(response => {
                setPosts(response.data);
                setLoading(false)
              })
              .catch(error => {
                console.error(error);
                setLoading(false)
              });
          }, []);
      
      useEffect(() => { 
            if(inputText.length !== ""){
                  setLoading(true)
                  axios.get(`https://api.coingecko.com/api/v3/search?query=${inputText}`)
                  .then(response => {
                     setPosts(response.data.coins);
                     setLoading(false)
                  })
                  .catch(error => {
                     console.error(error);
                     setLoading(false)
                  });
            }
          }, [inputText]);

      const handleSubmit = (e) => {
            var lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
      }

      return (
            <div className="containercoins">
                  <div className="titletext">
                        AVAILABLE COINS
                  </div>
                  <div className="add-post-container">
                        <input type="text" className="searchText" onChange={handleSubmit}/>
                  </div>
                  {loading ? <Loader /> : 
                  <div className="container-card">
                        { posts.slice(0, 120).map(post => (
                        <Card props={post} />
                        )) }   
                  </div>
                  }
            </div>


      )
}
export default Coins;