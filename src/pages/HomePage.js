import React from 'react'
import Content from '../components/homePage/Content';
import Footer from '../components/homePage/Footer';
import ResponsiveAppBar from '../components/homePage/ResponsiveAppBar';
import TopHeader from '../components/homePage/TopHeader';
const HomePage = (props) => {
  console.log(props)
  return (
    <div>
      <TopHeader {...props}/>
      <ResponsiveAppBar />
      <Content />
      <Footer />
    </div>
  )
}

export default HomePage
