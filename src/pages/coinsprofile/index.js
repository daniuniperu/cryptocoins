import React, { useState, useEffect } from 'react';
import "./coinsprofile.css"
import axios from 'axios';
import {useParams} from "react-router-dom";
import Loader from '../../components/Loader';

const CoinsProfile =()=>{
      const {id} = useParams();
      const [ident, ] = useState(id);
      const [info, setInfo] = useState({});
      const [loading, setLoading] = useState(false);
      
      useEffect(() => { 
            setLoading(true)
            if(ident.length !== ""){
                  axios.get(`https://api.coingecko.com/api/v3/coins/${ident}`)
                  .then(response => {
                     setInfo(response.data);
                     console.error(response.data);
                     setLoading(false)
                  })
                  .catch(error => {
                     console.error(error);
                  });
            }
          }, [ident]);


      return (
            <>
            {loading ? <Loader /> : 
            (<div className="containerprofile">
                <div className="container-profile">
                    <div className="img">
                            <img alt={info?.symbol} src={info?.image?.small}/>
                    </div>
                    <div className="symbol_container">
                            <p className='symbol'>{info?.symbol?.toUpperCase()}</p>
                            <p className='name'>{info?.name}</p>
                    </div>
                </div>
                <div className="container-price">
                    <div className="price">
                            PRICE:  {"$"+info?.market_data?.current_price?.usd}   
                    </div>
                    <div className="supply">
                            SUPPLY: {info?.market_data?.total_supply.toLocaleString()}   
                    </div>
                </div>
                <div className="container-description">
                    <div className="description">
                            {info?.description?.en} 
                    </div>
                </div>
            </div>
           )}
           </>
      )
}
export default CoinsProfile;