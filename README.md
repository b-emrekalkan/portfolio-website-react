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
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experience">Experience</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
```

## 📂 Create "Footer.jsx" file under "components" folder and import social media icons from MUI. Then import Footer.jsx in App.js and add it before the last "BrowserRouter"

```javascript
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
            </div>
            <p> &copy; 2023 linkedin.com/in/bemrekalkan</p>
        </div>
    )
}

export default Footer
```

## 📂 Customize "Home.jsx" and import social media icons from MUI. Then import Home.jsx in App.js

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
                        <h2>Frontend</h2>
                        <span>HTML, CSS, Bootstrap, SASS, Tailwind, React.js, Next.js</span>
                    </li>
                    <li className='item'>
                        <h2>Backend</h2>
                        <span>Django</span>
                    </li>
                    <li className='item'>
                        <h2>Programming Languages</h2>
                        <span>JavaScript, Python, PHP</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
```