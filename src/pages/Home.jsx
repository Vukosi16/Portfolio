import '../styles/Home.css'
import GreetingCard from "../components/greetingCard"
import PageNav from "../components/PageNav"
import PictureGrid from '../components/PictureGrid'

const Home = () => {
    

  return (
    <>
        <GreetingCard/>

        <div className='frontpageContact'>
            <div className="leftFrontPageContainer">
                <p className="herodescText" style={{marginLeft: '20px', fontFamily:'Helvetica'}}>
                    Hey, I’m Vukosi — a student who loves all things tech. I’m big on sports, always curious about how systems work, and currently exploring my way through the world of IT. Whether it’s coding or kicking a ball, I’m all in. Reach everything you need below:
                </p>
                <PageNav/>
            </div>
            <div className="rightFrontPageContainer">
                <PictureGrid/>
            </div>
        </div>


        <div  className='frontpageTechnologies'></div>
   </>
  )
}

export default Home
