import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    return (
        <ImageContext.Provider value={{ images, setImages }}>
            {children}
        </ImageContext.Provider>
    );
};

ImageProvider.propTypes = {
  children: PropTypes.any
}


export const useImageContext = () => useContext(ImageContext);
