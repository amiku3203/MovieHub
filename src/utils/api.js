import axios  from "axios";

const BASE_URL="https://api.themoviedb.org/3"

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTkyMDMxMjYwYWM0YjllMDljZGU5MWMzOWJiNGE0MCIsInN1YiI6IjY0ZGE0MmExZjQ5NWVlMDI5MjUwNDljYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pOUbwaAHdASOLGppPYlPMmxpunZqeLNusGoFVrdipg0"

const headers={
    Authorization: "bearer " + TMDB_TOKEN,
};



export const fetchDataFromApi= async (url,params)=>{
         try{
       const  {data}= await axios.get(BASE_URL+url,{
        headers,
        params
       })
       
       return data;

         }catch(err){
            console.log(err);
            return err;
         }
}