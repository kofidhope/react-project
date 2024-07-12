import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import View from '../components/View'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards/>
      <JobListings isHome= {true}/>
      <View/>
    </>
  )
}

export default HomePage
