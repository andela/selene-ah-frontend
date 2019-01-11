import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import homeActionCreators from './homeActionCreators';
import robot from '../../assets/images/avatars/robot.svg';
import edit from '../../assets/images/edit-3.svg';
import trimBody from '../../helpers/utilities/utilities';

import {
  Navbar,
  Tag,
  TagParent,
  Card,
  CardParent,
  SideNav,
} from '../../components/utilities';
import Hero from '../../components/misc';
/**
 * @class Home
 * @extends {Component}
 */
export class Home extends Component {
  state = {
    sidenav: false,
    isLoggedIn: localStorage.getItem('token') || false,
    initial: [],
  };

  changeSidenav = () => {
    this.setState({ sidenav: !this.state.sidenav });
  };

  /**
 * @memberof Home
 * @returns {bool} - true or false
 */
  componentDidMount() {
    this.props.fetchArticles();
  }


  /**
   * @returns {JSX} Html template
   * @memberof Home
   */
  render() {
    return (
      <Fragment>
       { this.state.sidenav
         ? <div className="sidebar-overlay"
         onClick={() => this.changeSidenav() }>
         </div> : null}

        { this.state.sidenav
          ? <SideNav isLoggedIn={ this.state.isLoggedIn }
          changeSidenav={ this.changeSidenav} /> : null }

        <Navbar isLoggedIn={this.state.isLoggedIn}
        changeSidenav={this.changeSidenav} />

        { this.state.isLoggedIn ? null : <Hero /> }
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
        <aside className="hide-on-med-and-down">
          <section className="section--header">
            <h3>popular writers</h3>
            <div>
              <span className="num">1.</span>
              <div className="writer--info">
              <span><img className="circle fav" src={robot}/></span>
              <span className="title cat">mr. robot</span>
              </div>
            </div>
            <div>
              <span className="num">2.</span>
              <div className="writer--info">
              <span><img className="circle fav" src={robot}/></span>
              <span className="title cat">ced</span>
              </div>
            </div>
            <div>
              <span className="num">3.</span>
              <div className="writer--info">
              <span><img className="circle fav" src={robot}/></span>
              <span className="title cat">rorona</span>
            </div>
            </div>
            <div>
              <div className="writer--info category--info category">
              {this.state.isLoggedIn
                ? <span id="info" className="title become">
                    <img src={edit} className="icon bell" />
                    write a story
                  </span>
                : <span id="info"
                className="title become">become a writer</span> }
            </div>
            </div>
          </section>
          <section className="section--header categories">
            <h3>your categories</h3>
            <div className="cater">
            <div>
              <div className="writer--info category--info">
              <span>
              <span className="cat">
                <i data-feather="life-buoy" className="icon"></i>
                </span></span>
              <span className="title cat--title">health</span>
              </div>
            </div>
            <div>
              <div className="writer--info category--info">
              <span>
              <span className="cat">
              <i data-feather="award" className="icon"></i></span>
              </span>
              <span className="title cat--title">design</span>
              </div>
            </div>
            <div>
              <div className="writer--info category--info">
              <span>
              <span className="cat">
              <i data-feather="cpu" className="icon"></i></span>
              </span>
              <span className="title cat--title">technology</span>
            </div>
            </div>
            <div>
              <div className="writer--info category--info cat-space">
              <span>
                <span className="cat">
                <i data-feather="github" className="icon"></i>
                </span>
                </span>
              <span className="title cat--title">programming</span>
            </div>
            </div>
            </div>
            <div>
              <div className="writer--info category--info category">
              <span className="title become more">view more</span>
            </div>
            </div>
          </section>
        </aside>
        <CardParent>
          {(this.props.articlesResponse.articles
          || []).map((article, i) => <Card
            imageUrl={article.imageUrl}
            title={article.title}
            body={trimBody(article.body)}
            author={article.author}
            readTime={article.readTime}
            key={i} />)}
        </CardParent>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.articlesResponse,
});

// eslint-disable-next-line max-len
export const mapDispatchToProps = dispatch => bindActionCreators(homeActionCreators, dispatch);

Home.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articlesResponse: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
