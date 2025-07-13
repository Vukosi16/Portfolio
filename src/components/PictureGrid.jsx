import heroImage from '../assets/heroImage.png'
import '../styles/Home.css'

const PictureGrid = () => {
  return (
    <>

      <div className="picturegrid">
        <img className='image selfPortrait' src={heroImage} alt="Picture of Vukosi" />

      </div> 

    </>
  )
}

export default PictureGrid
