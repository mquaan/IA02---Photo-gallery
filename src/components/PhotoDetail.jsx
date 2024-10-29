// import React from 'react';

const PhotoDetail = ({ photo }) => {
  if (!photo) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={photo.urls.regular}
        alt={photo.alt_description || 'Photo'}
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
      <h2>{photo.alt_description || 'No Title Available'}</h2>
      <p>By <strong>{photo.user.name}</strong></p>
      <p>{photo.description || 'No Description Available'}</p>
    </div>
  );
};

PhotoDetail.propTypes = {
  photo: {},
};

export default PhotoDetail;
