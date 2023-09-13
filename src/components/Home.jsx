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
        </div>
    )
}

export default Home