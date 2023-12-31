import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My name is Emre</h2>
                <div className='prompt'>
                    <p>A Frontend Developer with passion for learning and creating</p>
                    <EmailIcon />
                    <GitHubIcon />
                    <LinkedInIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h3>Frontend</h3>
                        <span>HTML, CSS, Bootstrap, SASS, Tailwind, React.js, Next.js</span>
                    </li>
                    <li className='item'>
                        <h3>Backend</h3>
                        <span>Django</span>
                    </li>
                    <li className='item'>
                        <h3>Programming Languages</h3>
                        <span>JavaScript, Python, PHP</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home