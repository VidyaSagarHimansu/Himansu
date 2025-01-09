import { useState } from 'react';
import './About.css';
function About(){    
    return (
    <div className='about-container' style={{
        borderRight: '1px solid',
        borderImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.01) 48%, transparent 100%) 1'
    }}>
        <div className='about-content-container'>
            <h1 style={{
                fontFamily: 'Questrial, sans-serif',
                fontWeight: '400',
                fontSize: '32px',
                marginBottom: '24px'
            }}>
                Hello, I'm Vidya Sagar Himansu 👋🏽
            </h1>

            <div className="bio-content">
                <p>I'm a Software Engineer based in Pune, India, with expertise in building scalable enterprise applications and distributed systems. My focus lies in developing robust financial technology solutions that handle high-volume trade processing.</p>
                
                <p>At Société Générale, I've been instrumental in:</p>
                <ul style={{
                    listStyle: 'none',
                    padding: '8px 0 16px 16px',
                    margin: '0'
                }}>
                    <li style={{marginBottom: '8px'}}>• Building cloud-native services that manage concurrent trade flows exceeding USD 50M</li>
                    <li style={{marginBottom: '8px'}}>• Developing responsive web applications using React and Redux</li>
                    <li style={{marginBottom: '8px'}}>• Implementing automated data pipelines with Apache Airflow</li>
                    <li style={{marginBottom: '8px'}}>• Streamlining CI/CD processes, reducing deployment times by 60%</li>
                </ul>

                <p>My technical expertise includes:</p>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    padding: '8px 0 16px 16px'
                }}>
                    <span className="tech-tag">Java Spring Boot</span>
                    <span className="tech-tag">React</span>                                        
                    <span className="tech-tag">C# .NET</span>
                    <span className="tech-tag">Apache Airflow</span>
                    <span className="tech-tag">RESTful APIs</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">Jenkins</span>
                    <span className="tech-tag">JUnit</span>
                    <span className="tech-tag">Mockito</span>
                    <span className="tech-tag">Git</span>
                    <span className="tech-tag">Docker</span>
                    <span className="tech-tag">Kubernetes</span>
                    <span className="tech-tag">CI/CD</span>
                </div>

                <p>I'm passionate about system design, algorithmic problem-solving, and creating efficient solutions that drive business value. Currently exploring opportunities to contribute to innovative projects in the fintech space.</p>
                
                <div id="socials" style={{
                width: '100%',
                paddingTop: '32px'
            }}>
                <div className="socials">
                    <span><a href="https://www.linkedin.com/in/vidya0/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="socials"
                        aria-label="LinkedIn Profile">
                        <i className="fab fa-linkedin-in"></i>
                    </a></span>

                    <span style={{marginLeft: '24px'}}><a 
                        href="https://github.com/VidyaSagarHimansu" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socials"
                        aria-label="GitHub Profile">
                        <i className="fab fa-github"></i>
                    </a></span>

                    <span style={{marginLeft: '24px'}}><a   
                        href="https://x.com/narendramodi" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socials"
                        aria-label="X Profile">
                        <i className="fab fa-x"></i>
                    </a></span>

                    <span style={{marginLeft: '24px'}}><a 
                        href="mailto:himansumaurya@gmail.com"
                        className="socials"
                        aria-label="Email Contact">
                        <i className="fas fa-envelope"></i>
                    </a></span>
                    
                </div>
            </div>
            
            </div>

            
        </div>        

    </div>)
}

export default About;
