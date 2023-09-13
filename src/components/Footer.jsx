import React from 'react';
import { Link } from 'react-router-dom';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                {/* <Link to="/instagram">
                    <InstagramIcon />
                </Link>
                <Link to="/facebook">
                    <FacebookIcon />
                </Link> */}
                <Link to="https://www.linkedin.com/in/bemrekalkan/">
                    <LinkedInIcon />
                </Link>
            </div>
            {/* <p>&copy; 2023 <Link to="https://www.linkedin.com/in/bemrekalkan/">BEK</Link></p> */}
        </div>
    )
}

export default Footer;
