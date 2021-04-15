import React from 'react';


const ImageList = props => {
    
    const images = props.images.map(image => {
        const { description, id, urls: { regular } } = image;
        return (
            <img alt={description} key={id} src={regular} />
        );
    });

    return <div>{images}</div>;
}

export default ImageList;