import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { APIoptions } from '../utils/constant';
import { addTrailerID } from '../utils/movieSlice';

const useMoviesTrailer = () => {
    const dispatch = useDispatch()
    const backgroundTrailer = useSelector(store => store.movies?.trailerId);

    const getTrailer = async () =>{
        const result  = await fetch("https://api.themoviedb.org/3/movie/845781/videos?language=en-US'",APIoptions);
        const json =  await result.json();
        console.log(json.results.filter((item) => item.type === "Trailer"))
        const filterData = json.results.filter((item) => item.type === "Trailer");
        const trailer = filterData.length? filterData[0] : json.results[0];

        dispatch(addTrailerID(trailer))
    }

    useEffect(() =>{
    getTrailer();
    },[])
   return backgroundTrailer;
}

export default useMoviesTrailer
