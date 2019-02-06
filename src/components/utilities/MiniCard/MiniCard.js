import React from 'react';
import PropTypes from 'prop-types';

import './mini-card.scss';

const MiniCard = props => (
  <div className='minicard'>
    <div className="minicard-image">
      <props.icon size={48}/>
    </div>
    <p className="minicard-stat">{props.stat}</p>
    <p className="minicard-title">{props.title}</p>
  </div>
);

MiniCard.propTypes = {
  icon: PropTypes.any,
  stat: PropTypes.string,
  title: PropTypes.string,
};

export default MiniCard;
