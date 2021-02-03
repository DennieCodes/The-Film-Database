import React, { useState, useEffect } from "react";
import { FilmProvider } from "../contexts/film.context.js";

// Components
import Header from "./Header";
import Carousel from "./Carousel";
import GODZILLA from "./GODZILLA";

const FilmDatabase = () => {

    // State to toggle Godzilla Trailer
    const [ epic, setEpic ] = useState(false);

    // Run once upon Render and Mounting
    useEffect(() => {
        setTimeout(() => {
            setEpic(true);
        }, 5000);
    }, []);
     
    return(
        <FilmProvider>
            {
                epic ? <GODZILLA setEpic={setEpic}/> 
                : <div className="container">
                    <Header />
                    <Carousel />
                </div>
            }

        </FilmProvider>
    )
}

export default FilmDatabase;