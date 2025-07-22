import '../styles/contact.css'
import PageNav from '../components/PageNav'
import phoneSvg from '../assets/phoneIcon.svg'
import linkedInIcon from '../assets/linkedInIcon.svg'
import gmailIcon from '../assets/emailIcon.svg'
import githubIcon from '../assets/githubIcon.svg'

const ContactMe = () => {
  return (
    <>
      <div className="contactPageContainer">
        <PageNav/>

        <div className="contactContainer">
          <div className="heroTextContainer">
            <h1 style={{fontSize: '3em'}}>Contact Me</h1>
            <p style={{fontSize: '1.5em'}}>For more information about where to get a hold of me or view my work and experience look below.</p>
          </div>

          <div className="linkToContactContainer">

            <div className="contactMethodContainer">
              <img className='linkIcons' src={phoneSvg} alt="Phone Svg" />
              <p style={{fontSize: '1.1em'}}>Phone Number: +27 67 257 5232</p>
            </div>
            <div className="contactMethodContainer">
              <a className="links" href="https://www.linkedin.com/in/vukosi-mohlabini-158646174/">
                <img className='linkIcons inLinkIcon' src={linkedInIcon} alt="LinkedIn Svg" />
              </a>
              <p style={{fontSize: '1.1em'}}>LinkedIn Profile</p>
            </div>
            <div className="contactMethodContainer">
                <img className='linkIcons' src={gmailIcon} alt="Email Svg" />
                <p style={{fontSize: '1.1em'}}>Gmail: Vukosimohlabini16@gmail.com</p>
            </div>
            <div className="contactMethodContainer">
              <a className="links" href="https://github.com/Vukosi16">
                <img className='linkIcons inLinkIcon' src={githubIcon} alt="Github Svg" />
              </a>
              <p style={{fontSize: '1.1em'}}>Github Profile</p>
            </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactMe
