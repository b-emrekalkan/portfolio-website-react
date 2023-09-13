import React from 'react'

const ProjectItem = ({ image, name }) => {
    return (
        <div className='projectItem'>
            <div className="picture">
                <iframe src={image} title={name}></iframe>
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default ProjectItem