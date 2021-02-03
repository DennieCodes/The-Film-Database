import React, { useEffect } from 'react';

const Modal = ( props ) => {
    const { title, img_url, rating, length, release_date, description, id, toggleShowModal } = props;
    
    return(
      <div className="Modal-container fade-in fade-quick">
        <div className="Modal">
            <img className="Modal-img" src={img_url} alt="Movie"/>
            <div className="Modal-info">
                <div className="Modal-title-box">
                    <h3 className="Modal-title light-text-shadow">{title}</h3>
                </div>
                <p>Rating: <span className="Modal-info-data">{rating}</span></p>
                <p>Film Duration: <span className="Modal-info-data">{length}</span></p>
                <p>Release Date: <span className="Modal-info-data">{release_date}</span></p>
                <div className="Modal-description-box">
                    <p>{description}</p>
                </div>
            </div>
            <button className="Modal-button" onClick={toggleShowModal}>close</button>
        </div>
      </div>    
    )
}

export default Modal;