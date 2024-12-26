import React, { useEffect } from 'react'
import Header from './Header'
import useNowplayingmovie from '../customhook/useNowplayingmovie'
import MainContainer from './MainContainer';


const Browse = () => {


  useNowplayingmovie();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse
