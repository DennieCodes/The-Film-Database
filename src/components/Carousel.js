import React, { useContext } from 'react';
import { FilmContext } from '../contexts/film.context.js';

// import Components
import Card from './Card';

const Carousel = () => {
    
    // Consume film context for film data
    const { state, setModal } = useContext(FilmContext);
    
    // Todo: Build half of the Cards into one div and the other half into another
    
    const films = state.filmData.map(film => {        
        // Destructure film information
        const { img_url, id } = film;
        
        return(
            <Card
            setActive={setModal}
            img_url={img_url}
            key={id}
            id={id}>
            </Card>
        )
    });    
    
    return (
        <main className="Carousel" >
            {films}
        </main>
    )
};

export default Carousel;