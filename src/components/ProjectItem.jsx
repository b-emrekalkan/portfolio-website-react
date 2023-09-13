import React from 'react'

const ProjectItem = ({ image, name }) => {
    return (
        <div className='projectItem'>
            <div className="picture">
                <img src={image} alt="" />
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default ProjectItem