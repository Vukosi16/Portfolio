import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import homeIcon from '../assets/home.svg'
import profileIcon from '../assets/profile.svg'
import projectsIcon from '../assets/project.svg'
import contactIcon from '../assets/contact.svg'

const PageNav = () => {
    const navigate = useNavigate();

    const navToPage =  (dirName) => {
        navigate(`/${dirName}`)
    }


  return (
    
    <>

        <div className="navContainer">
            <div className="navGridItems">
                <h4>Home</h4>
                <button onClick={() => navToPage('')} className="navButtons">
                    <img src={homeIcon} alt="home icon" className="home icon" />
                </button>
            </div>
            <div className="navGridItems">
                <h4>Profile</h4>
                <button onClick={() => navToPage('profile')} className="navButtons">
                    <img src={profileIcon} alt="profile icon" className="profile icon" />
                </button>
            </div>
            <div className="navGridItems">
                <h4>Projects</h4>
                <button onClick={() => navToPage('projects')} className="navButtons">
                    <img src={projectsIcon} alt="projects icon" className="projects icon" />
                </button>
            </div>
            <div className="navGridItems">
                <h4>Contact</h4>
                <button onClick={() => navToPage('contact')} className="navButtons">
                    <img src={contactIcon} alt="contact icon" className="contact icon" />
                </button>
            </div>
        </div>

    </>
  )
}

export default PageNav
