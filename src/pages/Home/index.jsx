import React from 'react'
import Header from '../../components/Header'
import Newsletter from '../../components/Newsletter'
import { HomeStyle } from  './styled'
const Home = () => {
  return (
      <HomeStyle>
      <Header/>
      <Newsletter/>
      </HomeStyle>
  )
}

export default Home