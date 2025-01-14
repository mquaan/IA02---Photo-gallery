// import { useEffect, useState } from 'react';
import { useImageContext } from '../context/ImageContext';
import { useParams, useNavigate } from 'react-router-dom';

// import axios from 'axios';
// import ImageDialog from '../components/ImageDialog';
import ImageDetail from '../components/ImageDetail';

const ImagePage = () => {
    const { id } = useParams();
    const { images } = useImageContext();
    const navigate = useNavigate();
    // const navigate = useNavigate();
    const currentIndex = images.findIndex((img) => img.id === id);
    const prevImage = images[currentIndex - 1];
    const nextImage = images[currentIndex + 1];

    const goToImage = (image) => {
        if (image) {
            navigate(`/photos/${image.id}`);
        }
    };

    // useEffect(() => {
    //     const fetchPhotoDetails = async () => {
    //         try {
    //             const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
    //                 headers: {
    //                     Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
    //                 },
    //             });
    //             setImg(response.data);
    //         } catch (error) {
    //             console.error("Error loading images:", error);
    //             alert(error.message);
    //         }
    //     };

    //     fetchPhotoDetails();
    // }, [id]);

    return (
        <ImageDetail 
            img={images[currentIndex]}
            onNavigateLeft={() => goToImage(prevImage)}
            onNavigateRight={() => goToImage(nextImage)}
        />
    );
};

export default ImagePage;
