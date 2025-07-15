import '../styles/Projects.css'
import PageNav from '../components/PageNav'
import ProjectCard from '../components/ProjectCard'
import projBackground from '../assets/pCardBackground.avif'
import portfolioIcon from '../assets/portfolioIcon.svg'
import gameIcon from '../assets/gameIcon.svg'
import calculatorIcon from '../assets/calculatorIcon.svg'
import youtubeIcon from '../assets/youtubeIcon.svg'

const Projects = () => {
  return (
    <>
      <div className="mainContainerProjects">
        <PageNav/>
        <div className="projectsGridContainer">
          <h1 className='projectsHeadingText'>Projects</h1>
          <div className="projectGrid">

              <ProjectCard 
                projSvg={portfolioIcon} 
                projName={"Portfolio"} 
                projDesc={"This is a portfolio made using React. It’s a simple, responsive design built with basic components like a navbar, project cards, and a contact section to showcase different projects in a clean and interactive way."}
                projImage={projBackground}
              />

              <ProjectCard 
                projSvg={gameIcon} 
                projName={"Etch-A-Sketch"} 
                projDesc={"This is a browser-based Etch A Sketch project made with HTML, CSS, and JavaScript. It features a grid that users can draw on by hovering, with simple controls for changing colors and clearing the board"}
                projImage={projBackground}
              />

              <ProjectCard 
                projSvg={gameIcon} 
                projName={"Battleship"} 
                projDesc={"This is a Battleship game built with JavaScript using object-oriented programming. It features classes to handle the game board, ships, and turns for an interactive gameplay experience."}
                projImage={projBackground}
              />

              <ProjectCard 
                projSvg={gameIcon} 
                projName={"Rock-Paper-Scissors"} 
                projDesc={"This is a simple Rock Paper Scissors game created with JavaScript, HTML, and CSS. It lets users play against the computer with instant results and keeps track of the score."}
                projImage={projBackground}
              />

              <ProjectCard 
                projSvg={calculatorIcon} 
                projName={"Calculator"} 
                projDesc={"This is a basic calculator built using HTML, CSS, and JavaScript. It performs standard arithmetic operations with a clean, user-friendly interface."}
                projImage={projBackground}
              />

              <ProjectCard 
                projSvg={youtubeIcon} 
                projName={"Youtube-Clone"} 
                projDesc={"This is a YouTube clone created using HTML and CSS. It mimics the layout and style of YouTube’s homepage, featuring video thumbnails, navigation, and a responsive design."}
                projImage={projBackground}
              />
            
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Projects
