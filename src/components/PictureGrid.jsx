import footballPic from '../assets/footballPic.svg'
import '../styles/Home.css'

const PictureGrid = () => {
  return (
    <>

      <div className="picturegrid">
        <img className='image selfPortrait' src={footballPic} alt="Picture of Vukosi" />

      </div> 

    </>
  )
}

export default PictureGrid
