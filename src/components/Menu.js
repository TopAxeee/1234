import React, { Component } from 'react'
import { useRef, useState, useEffect, useContext } from 'react';

import { Link } from "react-router-dom"
import MyArtists from './MyArtists'
import axios from '../api/axios';
import useAxiosArtists from './useAxiosArtists';

<link rel="stylesheet" href="src/fonts/font-awesome.min.css"></link>
const ADD_URL ="http://3.75.38.7:4184/api/artist/add"
const SEARCH_URL = "http://3.75.38.7:4184/api/artist/search"

const Menu = () => {
    const searchRef = useRef();
    const errRef = useRef();
    
    const [artist, setSearch] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    const {} = useAxiosArtists();

    useEffect(() => {
        setErrMsg('');
    }, [artist])

    // Нажатие
    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        console.log("Tokennn = " + localStorage.getItem("token"));
        const response = await axios.post(SEARCH_URL, {artist},{headers:  {'Authorization': `Bearer ${token}`},'Content-Type': 'application/json;charset=UTF-8'} )
        .then(res => {
          console.log(res, token);
          console.log(res.data);
        })
        
        const searchData = JSON.stringify(response.data);
        localStorage.setItem("searchData", searchData)
        console.log(searchData);    
        setSearch('');
        searchData = JSON.parse(searchData);
        searchData = JSON.parse(localStorage.getItem("searchData"))
    
    
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        }else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');}
        errRef.current.focus();
    }
    // const {} = useAxiosSearch;
    }    
    let userArtists = JSON.parse(localStorage.getItem("userData"))
    return ( 
        <div class="main_menu">
            
                <button class="sidebar_btn">
                    <Link to="/MyArtists">My Artists</Link>
                </button>
            <container class = "menu">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <button onClick class="sidebar_btn">
                    <Link to="/Search">Search</Link>
                </button>
                <div class="checkLP">
                    <h1>CheckLP</h1>
                </div>
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

                    
                {userArtists.rows.map((userArtists) => 
                <article class = "post">
                    <div>
                        {userArtists.name}
                    </div>
                </article>
                )}
            </container>
        </div>
    )
}
     export default  Menu