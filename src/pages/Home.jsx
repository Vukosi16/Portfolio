import '../styles/Home.css'
import GreetingCard from "../components/greetingCard"
import PageNav from "../components/PageNav"
import PictureGrid from '../components/PictureGrid'

const Home = () => {
    

  return (
    <>

        <div className="mainPageContainer">

            <PageNav/>
            <GreetingCard/>


        </div>

   </>
  )
}

export default Home
