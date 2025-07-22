import '../styles/Projects.css'

const ProjectCard = ({projName, projDesc, projImage, projSvg}) => {


  return (

    <>
        <a href={`https://github.com/Vukosi16/${projName}`} target="_blank" rel="noopener noreferrer">
              <div className="pCard" style={{backgroundImage: `url(${projImage})`}}>
                <img className='projSvg' src={projSvg} alt="" />
                <h2 className='projName'>{projName}</h2>
                <p className='projDesc'>{projDesc}</p>
            </div>
        </a>

    </>
  )
}

export default ProjectCard
