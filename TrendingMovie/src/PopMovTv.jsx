/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function PopMovTv() {
    const [showData,setShowData]=useState("");
    const [genre, setGenre]=useState([])

    const API_KEY = import.meta.env.VITE_API_KEY
    const img_base_path="https://image.tmdb.org/t/p/original"


     async function popMov(){
        const response=await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`);
      setShowData(response.data.results)
     }

     async function popTv(){
        const response=await axios.get(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${API_KEY}`);
        setShowData(response.data.results)
        console.log(response.data.results)


     }

     async function Genre(){
      const response= await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`)
      setGenre(response.data.genres);
    }
    
    function getGenre(GenreArr){
    return GenreArr.map((id)=>{
      const genreObj=genre.find((g)=>g.id===id)
      return genreObj ? genreObj.name : null;
    })
    .filter(Boolean)
    .join(', ');
    }










     useEffect(()=>{
      popMov()
      Genre()
     },[])


  return (
    <div>
        <button onClick={popMov}>Popular Movie</button>
        <button onClick={popTv}>Popular TV-Show</button>
        <div className="show">
          {showData.length > 0 &&
            showData.map((item)=>{
            return(
               <div className="images" key={item.id}>
                <img src={img_base_path+item.poster_path} alt="" />
                <h3>{item.title || item.name}</h3>
                <h5>{item.release_date ? new Date(item.release_date).toDateString() : new Date(item.first_air_date).toDateString()}</h5>
                <p>{getGenre(item.genre_ids)}</p>

               </div>
            )
          })
           }
      </div>
    </div>
  )
}

export default PopMovTv