# <center> [React Portfolio Website](https://portfolio-website-with-react.netlify.app/)</center>

<hr>

# ♦️ Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🖥️ To start React in the folder

```bash
 yarn create react-app .
```

## 🖥️ To add MUI

```bash
 npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

## 🖥️ To add React-Router

```bash
 npm i react-router-dom
```

## 🖥️ To see the rotating React logo on your localhost; type "yarn start" on your terminal

```bash
 yarn start
```

## ♦️ Start with router in App.js 👇

```javascript
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

## 📂 Create "pages" folder under "src" folder and add Home.jsx, Projects.jsx and Experience.jsx files.

```javascript
import React from 'react'

const Home = () => {
    return (
        <div>Home</div>
    )
}

export default Home
```

```javascript
import React from 'react'

const Projects = () => {
    return (
        <div>Projects</div>
    )
}

export default Projects
```

```javascript
import React from 'react'

const Experience = () => {
    return (
        <div>Experience</div>
    )
}

export default Experience
```

## ♦️ Import all pages in "App.js" file

```javascript
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
```

## 📂 Create a "components" folder under "src" folder and add "Navbar.jsx" file and import {Link} from react-router-dom

```javascript
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* 👇 Button that will appear when the page is minimized. 👇 */}
            <div className='toggleButton'>
                <button></button>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/projects">Experience</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
```

## ♦️ Import Navbar.jsx in "App.js" and add it after <"BrowserRouter">

```javascript
import Navbar from './components/Navbar'

    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
    </BrowserRouter>
```

## ♦️ Style Navbar in "App.css" file.

## ♦️ Import "Reorder Icon" from MUI for toggle button in Navbar.jsx

```javascript
import ReorderIcon from '@mui/icons-material/Reorder';

<button><ReorderIcon/></button>
```

## ♦️ Define useState to open links when ToggleButton is clicked and close them when clicked again. Do not forget to import useState from react!

```javascript
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation();

    //! If there is a change in the "location" variable, set "setExpandNavbar" to false and toggle is turned off 👇
    //? "useLocation" takes the current browser position, while "useEffect" controls the behavior of the navigation bar when the current position changes. This code allows the user to toggle the navigation bar on and off, and it is automatically closed when the position changes.
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        //! If "expandNavbar" is true, let "id=open". If false, let "id=close". The styles for these ids are in the App.css file. 👇
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            {/* 👇 Button that will appear when the page is minimized. 👇 */}
            <div className='toggleButton'>
                <button onClick={() => {
                    //! When clicked, make it false if "expandNavbar" is true, make it true if "expandNavbar" false 👇
                    setExpandNavbar((prev) => !prev)
                }}>
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar
```

## 📂 Create "Footer.jsx" file under "components" folder and import social media icons from MUI. Then import Footer.jsx in App.js and add it before the last "BrowserRouter"

```javascript
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

```

## 📂 Customize "Home.jsx" and import social media icons from MUI. Then import it in App.js

```javascript
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
```

## 📂 Customize "Experience.jsx" and import social media icons from MUI. Then import it in App.js

```javascript
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
```

## 📂 For Projects we need a "helper" folder under "src" folder. Then create a "ProjectList.js" file in it and list the projects here.

```javascript
export const ProjectList = [
    {
        name: "modayakamoz.net",
        image: "https://pbs.twimg.com/media/E7S3QliX0AAF6nN.jpg"
    },
    {
        name: "modayakamoz.pl",
        image: "https://localinsider.storage.googleapis.com/2022/07/best-food-delivery-apps-.jpeg"
    }
    ,
    {
        name: "modamotyl.com",
        image: "https://cdn.wmaraci.com/nedir/forum.png"
    },
    {
        name: "Movie App",
        image: "https://screenshots.webflow.com/sites/607d3f3b88d1c85f6691eff2/20210419114759_246d885cbcec8bebf7bb651f8e928c78.png"
    },
    {
        name: "Recipe App",
        image: "https://localinsider.storage.googleapis.com/2022/07/best-food-delivery-apps-.jpeg"
    }
    ,
    {
        name: "SASS Website",
        image: "https://cdn.wmaraci.com/nedir/forum.png"
    },
];
```

## 📂 Create "ProjectItem.jsx" component in "components" folder to map and show the projects.

```javascript
import React from 'react';

const ProjectItem = ({ image, name }) => {
    const redirectToImageLink = () => {
        window.open(image, '_blank'); // Opens the specified URL in a new tab.
    };

    return (
        <div className='projectItem' onClick={redirectToImageLink}>
            <div className="picture">
                <iframe src={image} title={name}></iframe>
            </div>
            <h3>{name}</h3>
        </div>
    );
};

export default ProjectItem;

```

## ♦️ Import ProjectItem and ProjectList in "Projects.jsx"

```javascript
import React from 'react'
import ProjectItem from "../components/ProjectItem"
import { ProjectList } from '../helper/ProjectList'

const Projects = () => {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} />
                })}

            </div>
        </div>
    )
}

export default Projects
```