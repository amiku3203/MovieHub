import React from 'react'
import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

import useFetch from '../../../hooks/useFetch'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'



const   TopRated = () => {
  const [endpoint,setEndpoint]=useState("movie")
  const {data,loading}=useFetch(`/${endpoint}/top_rated`)  
  console.log("datain",data);
  const onTabChange=(tab)=>{
    setEndpoint(tab==="Movies"?"movie":"tv");
    }
  console.log(data);
  return  <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
  </div>
}

export default  TopRated ;
