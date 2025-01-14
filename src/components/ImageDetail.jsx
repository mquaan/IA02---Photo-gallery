import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../style/ImageDetail.css';

const ImageDetail = ({ img, onNavigateLeft, onNavigateRight }) => {
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    if (!img) {
        return <div>Loading...</div>;
    }

    return (
        <div className="image-detail-container">
            <button className="close-button" onClick={() => navigate('/')}>X</button>
			<button className="nav-button left-button" onClick={onNavigateLeft} disabled={!onNavigateLeft} >◀</button>
            
            <img
                src={img.urls.full}
                alt={img.alt_description || 'Photo'}
                className="image-detail-image"
            />
			<button className="nav-button right-button" onClick={onNavigateRight} disabled={!onNavigateRight}>▶</button>
            <h2 className="image-detail-title">{img.alt_description || 'No Title Available'}</h2>
            <p className="image-detail-author">By <strong>{img.user.name}</strong></p>
            <p className="image-detail-description">{img.description || 'No Description Available'}</p>
        </div>
    );
};

ImageDetail.propTypes = {
    img: PropTypes.object,
    onNavigateLeft: PropTypes.func,
    onNavigateRight: PropTypes.func,
};

export default ImageDetail;
