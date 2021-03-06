import React from 'react';
import PropTypes from 'prop-types';

import HomeButton from './HomeButton';


const Home = props => (
  <div className="home-container" >
    <div className="home-headers-container">
      <h1
        className="home-header-part-1"
      >Electronic music<br /> for people who<br /> don&apos;t like
      <span className="home-header-part-2">electronic music</span>
      </h1>

    </div>
    <div className="explanation-container">
      <h2>Welcome to this guide to discovering electronic music. Please choose below a genre that you like and follow through</h2>
    </div>
    <div className="home-button-container">
      <HomeButton
        toggleTransitionFromHome={props.toggleTransitionFromHome}
        link={`/${process.env.REACT_APP_ROCK}`}
      > I like Rock
      </HomeButton>
      <HomeButton
        toggleTransitionFromHome={props.toggleTransitionFromHome}
        link={`/${process.env.REACT_APP_RAP}`}
      > I like Hip-hop
      </HomeButton>
      <HomeButton
        toggleTransitionFromHome={props.toggleTransitionFromHome}
        link={`/${process.env.REACT_APP_METAL}`}
      > I like Metal
      </HomeButton>
      <HomeButton
        toggleTransitionFromHome={props.toggleTransitionFromHome}
        link={`/${process.env.REACT_APP_DAFT}`}
      > Meh, I like Daft Punk
      </HomeButton>
    </div>
  </div>
);

Home.propTypes = {
  toggleTransitionFromHome: PropTypes.func.isRequired,
};

export default Home;
