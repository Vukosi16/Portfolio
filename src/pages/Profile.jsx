import '../styles/Profile.css'
import PageNav from '../components/PageNav'
import footballPic  from '../assets/footballPic.jpg'
import crawfordLogo from '../assets/crawfordLogo.jpeg'
import damelinLogo from '../assets/damelinLogo.png'
import richfieldLogo from '../assets/richfieldLogo.png'
import shaperLogo from '../assets/shaperLogo.png'
import htmlIcon from '../assets/htmlIcon.svg'
import cssIcon from '../assets/cssIcon.svg'
import javascriptIcon from '../assets/javascriptIcon.svg'
import reactIcon from '../assets/reactIcon.svg'
import sqlIcon from '../assets/sqlIcon.svg'
import wordpressIcon from '../assets/wordpressIcon.svg'
import seoIcon from '../assets/seoIcon.svg'
import jiraIcon from '../assets/jiraIcon.svg'
import agileIcon from '../assets/agileIcon.svg'
import dataAnalyticsIcon from '../assets/dataAnalyticsIcon.svg'
import gearIcon from '../assets/gearIcon.svg'
import networkIcon from '../assets/networkIcon.svg'
import lockIcon from '../assets/lockicon.svg'
import databaseIcon from '../assets/databaseIcon.svg'


const Profile = () => {
  const webDevicons = [htmlIcon, cssIcon, javascriptIcon, reactIcon, sqlIcon, wordpressIcon, seoIcon]
  const baIcons = [jiraIcon, agileIcon,dataAnalyticsIcon]
  const ssIcons =[gearIcon, networkIcon, lockIcon, databaseIcon]
  
  return (
    <>
      <div className='profileMainPageContainer'>
        <PageNav/>
        <div className="rightSideContainer">
          <div className="personalSec">
            <img src={footballPic} alt="" />
            <p className="personalDesc">
              Hey, I’m Vukosi — a student who loves all things tech. I’m big on sports, always curious about how systems work, and currently exploring my way through the world of IT. Whether it’s coding or kicking a ball, I’m all in. Reach everything you need below.
            </p>
          </div>
          <h1 style={{margin: 0, padding: 0}}>Education</h1>
          <div className="schoolSec">
            <div className="gridIemSchools">
              <img className='gridImageLogo' src={crawfordLogo} alt="crawford college logo" />
            </div>
            <div className="gridIemSchools">
              <p className="gridItemText">
                At Crawford College, the first lines of code sparked a lifelong passion. The logic and creativity of programming immediately captivated me, shaping my interests ever since.
              </p>
            </div>
            <div className="gridIemSchools">
              <img src={damelinLogo} alt="" className="gridImageLogo" />
            </div>
            <div className="gridIemSchools">
              <p className="gridItemText">
                At Damelin College, my NQF 5 in Systems Development transformed my coding interest into practical expertise. I honed my skills in Java, JavaScript, HTML, CSS, C#, and Visual Basic, building a strong foundation in diverse programming languages.
              </p>
            </div>
            <div className="gridIemSchools">
              <img src={richfieldLogo} alt="" className="gridImageLogo" />
            </div>
            <div className="gridIemSchools">
              <p className="gridItemText">
                At Richfield College, I thrived as a tutor, achieving numerous distinctions and securing second place in my class. My time there was marked by active involvement in diverse projects, further cementing my practical skills and academic success.
              </p>
            </div>
            <div className="gridIemSchools">
              <img src={shaperLogo} alt="" className="gridImageLogo" />
            </div>
            <div className="gridIemSchools">
              <p className="gridItemText">
                At Shaper, I gained invaluable real-world experience through my learnership in Business Analysis and Systems Support. This role allowed me to tackle practical challenges using Jira and even develop webpages in WordPress, solidifying my understanding of business processes and digital solutions.
              </p>
            </div>
          </div>
          <h1 style={{margin: 0, padding: 0}}>Skills</h1>
          <div className="skillsSec">
            <div className="skillsGrid">
              <div className="skillGridItem">
                <h2 className='skillsHeading'>Web Development</h2>
              </div>
              <div className="skillGridItem">
                <div className="webDevGrid">
                  {webDevicons.map((icon)=> (
                    <img src={icon} className='skillIcon'/>
                  ))}
                </div>
              </div>
              <div className="skillGridItem">
                <h2 className='skillsHeading'>Business Analysis</h2>
              </div>
              <div className="skillGridItem">
                <div className="BAGrid">
                  {baIcons.map((icon)=> (
                    <img src={icon} className='skillIcon'/>
                  ))}
                </div>
              </div>
              <div className="skillGridItem">
                <h2 className='skillsHeading'>System Support</h2>
              </div>
              <div className="skillGridItem">
                <div className="systemSupportGrid">
                  {ssIcons.map((icon)=> (
                    <img src={icon} className='skillIcon'/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </>
 
  )
}

export default Profile
