import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
    const navigate = useNavigate();
    const btnLinkToContactPage = () => {
        navigate('/contact');
    }

  return (
    <>
        <div className='frontpageHero'>
        <div className="holderDiv">
            <h1 className='greetingHeader'>Hello I'm</h1>
            <h1 style={{fontSize: '2.5em'}}>Vukosi Blessing Mohlabini</h1>
            
            <div className="titleContainer">
                <p style={{margin: '10px', fontFamily:'Helvetica'}}>Web Developer, Business Analysts and System Support Technitian</p>
            </div>
            
            <div className="holderDivButton">
                <a href="./CV.pdf" download>
                    <button>Download CV</button>
                </a>

                <button onClick={btnLinkToContactPage}>Let's Connect</button>
            </div>
        </div>
        </div>

        <div className='frontpageContact'></div>

        <div  className='frontpageTechnologies'></div>
   </>
  )
}

export default Home
