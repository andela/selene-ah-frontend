import React, { Component, Fragment } from 'react';
import {
  Navbar,
  Tag,
  TagParent,
  SideNav,
} from '../components/utilities';
import Hero from '../components/misc';

/**
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  /**
   * @returns {JSX} Html template
   * @memberof Home
   */
  render() {
    return (
      <Fragment>
        <SideNav />
        <Navbar />
        <Hero />
        <TagParent>
          <Tag icon="bar-chart" isActive={true}>Popular</Tag>
          <Tag icon="cpu">Tech</Tag>
          <Tag icon="globe">Culture</Tag>
          <Tag icon="life-buoy">Health</Tag>
          <Tag icon="message-circle">Politics</Tag>
          <Tag icon="award">Design</Tag>
          <Tag icon="book-open">Education</Tag>
          <Tag icon="clock">History</Tag>
          <Tag icon="compass">Geography</Tag>
        </TagParent>
      </Fragment>
    );
  }
}

export default Home;
