# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start React in the folder 🖥️

```bash
 yarn create react-app .
```

## To add MUI 🖥️

```bash
 npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

## To add React-Router 🖥️

```bash
 npm i react-router-dom
```

## To see the rotating React logo on your localhost; type "yarn start" on your terminal 🖥️

```bash
 yarn start
```

## Start with router in App.js 👇

```javascript
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

## Import all pages in "App.js" file

```javascript
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
```