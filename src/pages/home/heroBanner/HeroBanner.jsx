import React  from 'react'

import { useState,useEffect } from "react"

import {useNavigate} from "react-router-dom"
import "./style.scss"

import useFetch from '../../../hooks/useFetch'

import {useSelector} from "react-redux"

import Img from "../../../components/lazyloadImage/Img"

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
export const HeroBanner = () => { 



  const [background,setBackground]=useState("");
  const [query,setQuery]=useState("");
  const navigate=useNavigate();
  const  {url} = useSelector((state)=>state.home)
const {data,loading}=useFetch("/movie/upcoming");
console.log(data);

useEffect(()=>{
 const bg =url.backdrop+ data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
  console.log(bg);
 setBackground(bg)
},[data]);

  const searchQueryHandler=(e)=>{
        if(e.key==="Enter" && query.length>0){
            navigate(`/search/${query}`)
        }
  }


  return (
     <div className="heroBanner">
       
       {!loading &&<div className="backdrop-img">
         <Img src={background}/>
       </div>}

       <div className="opacity-layer"></div>
      <ContentWrapper> 
 
            <div className="heroBannerContent">
              <span className="title">Welcome.</span>
              <span className="subtitle">Millions of movies,TV shows and people to discover. Explore now.</span>
            <div className="searchInput">
              <input 
              type="text"
               placeholder='Search for a movie or tv show....'
               onChange={(e)=>setQuery(e.target.value)}
               onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>
           
           
    
   
       
     </div>

      </ContentWrapper>
     



     </div>
  )
}
