import React from 'react';
import PropTypes from 'prop-types';

const SpotifyContainer = ({ url }) => (
  <div className="album-spotify-container" >
    <iframe
      src={`https://open.spotify.com/embed?uri=${url}?si=n6Ki-iE7Sg6gcpuywEnQCQ&theme=white`}
      style={{ width: '100%', height: '100%' }}
      frameBorder="0"
      allowTransparency
      title="spotify-wrapper"
    />
  </div>
);

SpotifyContainer.defaultProps = {
  url: '',
};

SpotifyContainer.propTypes = {
  url: PropTypes.string,
};

export default SpotifyContainer;
