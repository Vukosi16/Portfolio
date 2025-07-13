import '../styles/Home.css'
import PictureGrid from './PictureGrid';
import { useNavigate } from 'react-router-dom';

const GreetingCard = () => {
  const navigate = useNavigate();
    const btnLinkToContactPage = () => {
        navigate('/contact');
    }


  return (
    <>
    
      <div className='frontpageHero'>
        <div className="holderDiv">
            <h1 className='greetingHeader'>Hello I'm</h1>
            <h1 style={{fontSize: '3em'}}>Vukosi Blessing Mohlabini</h1>
            
            <div className="titleContainer">
                <p style={{fontSize: '1.2em', margin: '10px', marginBottom: '40px', fontFamily:'Helvetica', textAlign: 'center'}}>Aspiring Web Developer, Business Analysts and System Support Technitian</p>
            </div>
            
            <div className="holderDivButton">
                <a href="./CV.pdf" download>
                    <button>Download CV</button>
                </a>

                <button onClick={btnLinkToContactPage}>Let's Connect</button>
            </div>
          </div>
          <PictureGrid/>
        </div>

    </>
  )
}

export default GreetingCard
