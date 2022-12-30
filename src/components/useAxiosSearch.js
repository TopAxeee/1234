import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosSearch = (url) => {
  // const SEARCH_URL = "http://3.75.38.7:4184/api/artists/search"
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const token = localStorage.getItem("token");
  // const fetchData = async () => {
  //     try {
  //       const artist = (artist);
  //       var config = {
  //       method: 'get',
  //       url: SEARCH_URL,
  //       data: {artist: artist},
  //       headers: { 
  //           'Authorization': `Bearer ${token}`
  //       }
  //       };

  //       axios(config)
  //       .then(function (response) {
  //       const searchData = JSON.stringify(response.data);
  //       localStorage.setItem("searchData", searchData)
  //       console.log(searchData);
  //       });
  //       }
  //       catch (error) {
  //           setIsLoading(false);
  //           setIsError(true);
  //           console.log(error);
  //         }
  //   }
  //   const searchData = localStorage.getItem("searchData");
  //   // userData = JSON.parse(userData);
  //   console.log("Nuber search" + searchData.name);


  //   fetchData();

  // return { isLoading, isError, data };
};
export default useAxiosSearch;