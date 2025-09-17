import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faPython, faJava } from '@fortawesome/free-brands-svg-icons'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

import { faRobot, faTerminal } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
                  setLetterClass('text-animate-hover')
                }, 3000)
  }, [])
    
    return (
        <>
        <div className = 'container about-page'>
            <div className ='text-zone'>
                <h1>

                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't' , ' ', 'm', 'e']}
                        idx = {15} />

                </h1>

                <p> Hi, I'm Mauricio! I am an engineer and researcher who hopes to leverage my skills to tackle impactful challenges in visualization, AI, and beyond.  
                    My biggest strength is my curiosity, learning and finding creative ways to use different technologies. 
                    I'm passionate about how AI and human-centered systems can work together to better the world,
                    and I hope to be a part of the force that makes that change.
                    If you're working on something innovative, I would love to hear about it. (Please email me!)
                    Outside of tech, I spend my free time working out, traveling, gaming, and spending time with friends and family.        
                </p>

                <p>
                    I have experience building scalable machine learning pipelines, designing interactive visualization systems, and applying AI to solve problems in healthcare, science, and the environment. Whether it’s developing explainable NLP systems for high-stakes domains at the Visual Intelligence Lab, building predictive models for ICU admissions and respiratory device data at the Mayo Clinic, creating deep learning pipelines for spatiotemporal environmental analysis at the Vipin Kumar Lab, or engineering evidence-based health information systems like KNOWNET, I’ve been able to adapt quickly to diverse domains and deliver meaningful results.                  
                </p>

                <p>
            This year, I am continuing my research as a Graduate Research Assistant in the Visual Intelligence Lab, focusing on explainable AI and visualization for biomedical applications. My long-term goal is to pursue a PhD in machine learning with an emphasis on visualization and explainability!
                </p>


                <p>
                    </p>

                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faPython} color = '#28A4D9' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faJava} color = '#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faGitAlt} color = '#DD01F2' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faAtom} color = '#5ED4F4' />
                    </div>
        
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faRobot} color = '#EFD81D' />
                    </div>       
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faTerminal} color = '#000000' />
                    </div>
                </div>
            </div>
        </div>

        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}



export default About
