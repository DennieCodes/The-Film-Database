import React from 'react';

const Card = (props) => {
    const { img_url, id, setActive } = props;

    return (
        <div className="Card" >
            <a href="#" onClick={()=> setActive(id)}>
                <img 
                    className="Card-image" 
                    src={img_url} 
                    alt="Movie Poster image"
                />
            </a>
        </div>
    )
};

export default Card;