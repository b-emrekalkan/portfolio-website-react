import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Experience = () => {
    return (
        <div className='expContainer'>
            <div className="expElements">
                <h1>Professional Experience</h1>
                <ol>
                    <li>
                        <SchoolIcon />
                        <h3>University Graduation - 2013</h3>
                        <p>Anadolu University-Business</p>
                    </li>
                    <li>
                        <BusinessCenterIcon />
                        <h3>My first job as a Frontend Developer 07/2022 – 10/2022</h3>
                        <p>Coza Digital</p>
                    </li>
                    <li>
                        <BusinessCenterIcon />
                        <h3>Frontend Developer  01/2023 – Present</h3>
                        <p>Moda Yakamoz</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Experience