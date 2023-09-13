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
