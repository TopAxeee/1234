import React, { Component } from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from '../api/axios';
const ADD_URL ="http://3.75.38.7:4184/api/artist/add"
const SEARCH_URL = "http://3.75.38.7:4184/api/artist/search"
//localStorage.removeItem('searchData')
const Search = () => {

  const searchRef = useRef();
  const errRef = useRef();
  const [artist, setSearch] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const token = localStorage.getItem('token');
  // const searchArtists = JSON.parse(localStorage.getItem("searchData"))

const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
let searchArtists = JSON.parse(localStorage.getItem("searchData"))
const fetchData = async () => {
  console.log(123)
    try {
      const artist = (artist);
      var config = {
      method: 'get',
      url: SEARCH_URL,
      data: {artist: artist},
      headers: { 
          'Authorization': `Bearer ${token}`
      }
      };

      axios(config)
      .then(function (response) {
      const searchData = JSON.stringify(response.data);
      localStorage.setItem("searchData", searchData)
      console.log(searchData);
      });
      }
      catch (error) {
          setIsLoading(false);
          setIsError(true);
          console.log(error);
        }
  }
const handleSubmit = async (e) => {
  e.preventDefault();
  try{const SEARCH_URL = "http://3.75.38.7:4184/api/artists/search"
  
  
    const searchData = localStorage.getItem("searchData");
    // userData = JSON.parse(userData);
    console.log("Nuber search" + searchData.array);
    fetchData();
  return { isLoading, isError, data };
  
}catch{}

}
  return(<div class ="main_menu">
    <container class ="menu">
    <div class="new-search">
        <input type="text" maxlength= "250" placeholder="Search" class="searchbar"
                id="search"
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value)}
                value={artist}
                required/>
        <button onClick={handleSubmit} class="searchbtn">
          
        </button>
        </div>
        
        <span>
        {searchArtists&&searchArtists.array.map((searchArtists) => 
                <article class = "post">
                    <div>
                        {searchArtists.name}
                    </div>
                </article>
                )}
          
        </span>
    
    </container>
    </div>

  )
  
}
export default Search;