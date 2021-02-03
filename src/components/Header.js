import React, { useContext, useEffect } from "react";

import { FilmContext } from '../contexts/film.context.js';

import useToggleState from "../hooks/useToggleState";

import Splashscreen from "./SplashScreen";
import Modal from "./Modal";

const Header = () => {    
    // Film state - needs to have some way to distinguish active Card if any
    const { state } = useContext(FilmContext);

    // Find active film from activeModal, returns undefined if none is present
    let foundFilm = state.filmData.find(ele => ele.id === state.activeModal);
    
    // showModal which determines if Modal is active
    const [ showModal, toggleShowModal ] = useToggleState(false);
    
    // toggle showModal to true if state has changed
    useEffect(() => {
        if (!showModal) toggleShowModal();
    }, [state]);
    
    // const { title, img_url, rating, length, release_date, id } = foundFilm;

    const modal = foundFilm && showModal ? 
        <Modal
            title={foundFilm.title}
            img_url={foundFilm.img_url}
            rating={foundFilm.rating}
            length={foundFilm.length}
            release_date={foundFilm.release_date}
            description={foundFilm.description}
            toggleShowModal={toggleShowModal}
            id={foundFilm.id}
        />    
        : "";
    
  return(
    <header className="header">
      {modal}
      <Splashscreen />
    </header>
  )  
}

export default Header;