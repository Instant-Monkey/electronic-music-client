import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { albumShape, richChoiceShape } from '../lib/PropTypesValues';

import AlbumPageHeader from './AlbumPageHeader';
import CurrentAlbum from './AlbumContent/CurrentAlbum';
import ChoiceContainer from './Choices/ChoiceContainer';
import Title from './AlbumHeaders/Title';
import GoBack from './Choices/GoBack';
import AlbumFooter from './AlbumFooter';

export default class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.renderSlidingSection = this.renderSlidingSection.bind(this);
    this.setReverseAnim = this.setReverseAnim.bind(this);
    this.state = {
      reverseAnim: false,
    };
  }
  setReverseAnim(bool, cb) {
    this.setState({
      reverseAnim: bool,
    }, cb);
  }
  renderSlidingSection() {
    return (
      <ReactCSSTransitionGroup
        transitionName={this.state.reverseAnim ? 'albumAnimationLeft' : 'albumAnimationRight'}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppearTimeout={600}
        transitionAppear
        className="temporary-slide-container"
        component="div"
      >
        <div key={this.props.album._id} className="transistion-slide-container">
          <div className="album-page-global-album-container">
            <GoBack display={this.props.goBackButton} setReverseAnim={this.setReverseAnim} />
            <CurrentAlbum album={this.props.album} />
            <ChoiceContainer
              richChoices={this.props.richChoices}
              originAlbum={this.props.album}
              setReverseAnim={this.setReverseAnim}
            />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
  render() {
    return (
      <div>
        <div className="Album-Page">
          <Link to="/"><AlbumPageHeader /></Link>
          <Title font="streamster" classNameProp="album-page-ecouter-container">
            Try To Listen To...
          </Title>
          {this.renderSlidingSection()}
        </div>
        <AlbumFooter setReverseAnim={this.setReverseAnim} />
      </div>
    );
  }
}

AlbumPage.propTypes = {
  album: PropTypes.shape(albumShape).isRequired,
  richChoices: PropTypes.arrayOf(PropTypes.shape(richChoiceShape)).isRequired,
  goBackButton: PropTypes.bool.isRequired,
};
