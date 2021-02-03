import React, { createContext, useState } from 'react';
import filmData from '../utilities/filmData';

export const FilmContext = createContext();

export const FilmProvider = (props) => {
    // Code for reducer if I use
    // const [ state, dispatch ] = useReducer(filmReducer, initialValues);
    
    // Initialize and set up state and setState
    const initialValues = {
        filmData,
        activeModal: null
    };
        
    const [ state, setState ] = useState(initialValues);
    
    // Function that sets activeModal value
    const setModal = (id) => {
        setState({
            ...state,
            activeModal: id
        })
    }

    return(
        <FilmContext.Provider value={{ state, setModal }}>
            { props.children }
        </FilmContext.Provider>        
    )    
}