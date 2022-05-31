import React from 'react'
import DashboardContainer from '../../components/DashboardContainer/DashboardContainer'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { HomeContainer } from '../../styled-components/Home'

const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <DashboardContainer>
      </DashboardContainer>
    </HomeContainer>
  )
}

export default Home