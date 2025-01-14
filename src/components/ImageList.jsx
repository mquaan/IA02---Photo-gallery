import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import '../style/ImageList.css';
import PropTypes from 'prop-types';

const ImageList = ({ images }) => {
    const breakpointColumnsObj = {
        default: 4, // 4 cột ở màn hình lớn
        1100: 3,    // 3 cột ở màn hình vừa
        700: 2,     // 2 cột ở màn hình nhỏ
        500: 1      // 1 cột ở màn hình rất nhỏ
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="image-list"
            columnClassName="image-list_column"
        >
            {images.length > 0 ? (
                images.map((image) => (
                    <div key={image.id} className="image-container">
                        <Link to={`/photos/${image.id}`}>
                            <img
                                src={image.urls.regular}
                                alt={image.alt_description || 'Unsplash Image'}
                                className="image"
                            />
                            <div className="author-overlay">
                                <p>{image.user.name}</p>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="end-of-list">End of list</p>
            )}
        </Masonry>
    );
}

ImageList.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ImageList;
