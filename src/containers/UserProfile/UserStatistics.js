import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

import MiniCard from '../../components/utilities/MiniCard/MiniCard';
import './scss/user-statistics.scss';
/**
 * @class UserStat
 * @extends {Component}
 */
class UserStat extends Component {
  static propTypes = {
    followerStat: PropTypes.object,
    error: PropTypes.bool,
    articleLikes: PropTypes.number,
    articleStat: PropTypes.object,
    commentStat: PropTypes.number,
    bookmarkStat: PropTypes.number,
    yourFollowing: PropTypes.number,
  }

  /**
   * @description
   * @return {JSX} - returns the page JSX
   */
  render() {
    const stats = [
      {
        id: 1,
        icon: Icon.Users,
        stat: `${this.props.followerStat.totalFollowers}`,
        title: 'Followers',
      },
      {
        id: 2,
        icon: Icon.UserPlus,
        stat: `${this.props.followerStat.newFollowers}`,
        title: 'New Followers',
      },
      {
        id: 3,
        icon: Icon.UserCheck,
        stat: `${this.props.yourFollowing}`,
        title: 'Number of People You are following',
      },
      {
        id: 4,
        icon: Icon.ThumbsUp,
        stat: `${this.props.articleLikes}`,
        title: 'No of Liked Articles',
      },
      {
        id: 5,
        icon: Icon.Edit3,
        stat: `${this.props.articleStat.noOfWrittenArticles}`,
        title: 'No of Articles Written',
      },
      {
        id: 6,
        icon: Icon.Bookmark,
        stat: `${this.props.bookmarkStat}`,
        title: 'Bookmark Articles',
      },
      {
        id: 7,
        icon: Icon.BookOpen,
        stat: `${this.props.articleStat.noOfreaders}`,
        title: 'Users that Read your Articles',
      },
      {
        id: 8,
        icon: Icon.FileText,
        stat: this.props.articleStat.totalNoOfReadingTime <= 1
          ? `${this.props.articleStat.totalNoOfReadingTime}min`
          : `${this.props.articleStat.totalNoOfReadingTime}mins`,
        title: 'Total Number of Article Read Time',
      },
      {
        id: 9,
        icon: Icon.MessageCircle,
        stat: `${this.props.commentStat}`,
        title: 'Total Number of Comments by You',
      },
    ].map(stat => (
        <MiniCard key={stat.id} stat={stat.stat}
          icon={stat.icon} title={stat.title} />
    ));
    return (
      <div className="stats-container">
        <p className="stats-header">Your Stats</p>
        <div className="minicard-container">
        {stats}
        </div>
      </div>
    );
  }
}


export default UserStat;
