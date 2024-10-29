import { Link } from 'react-router-dom';

const PhotoGrid = ({ photos }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
        {photos.map((photo) => (
            <div key={photo.id}>
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.urls.thumb} alt={photo.alt_description} style={{ width: '100%' }} />
                    <p>{photo.user.name}</p>
                </Link>
            </div>
        ))}
    </div>
);

PhotoGrid.propTypes = {
    photos: [],
};

export default PhotoGrid;
