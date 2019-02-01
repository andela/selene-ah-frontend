import React from 'react';
import { Star } from 'react-feather';
import PropTypes from 'prop-types';


/**
 *
 * @params rating
 * @params tempRating
 * @class Ratings
 * @extends {React.Component}
 */
export class Ratings extends React.Component {
  static propTypes = {
    response: PropTypes.object.isRequired,
    postRating: PropTypes.func,
    fetchAverageRating: PropTypes.func,
    userRatingResponse: PropTypes.object,
    averageRating: PropTypes.object,
    user: PropTypes.object,
  }

  state = {
    tempRating: null,
    rating: null,
    myArticle: false,
  }

  /**
 * Update the state of rate.
 * @param {rate} rate the rate the user wishes to give.
 * @returns {void} Update the state of to post new rate.
 */
     rate = async (rate) => {
       const { id } = this.props.response.article;
       await this.props.postRating(id, {
         articleRating: rate,
       });
       await this.props.fetchAverageRating(id);
       this.setState({
         rating: rate,
         tempRating: rate,
       });
     }

     /**
 * Update the state of tempRate.
 * @param {tempRate} tempRate the rate the user wishes to give.
 * @returns {void} Update the state of to post new rate.
 */
    starOver = (tempRate) => {
      this.setState({
        tempRating: this.state.rating,
        rating: tempRate,
      });
    };

  starOut = () => {
    this.setState({
      tempRating: this.state.tempRating,
      rating: this.state.tempRating,
    });
  }

  /**
 * @returns {void} update the state of myArticle.
 */
  componentDidMount() {
    if (this.props.user && this.props.user.id
      === this.props.response.article.userId) {
      this.setState({ myArticle: !this.state.myArticle });
    }
  }

  /**
 * @param {object} nextProps The only argument.
 * @returns {void} update the state of ratings.
 */
  shouldComponentUpdate(nextProps) {
    if (this.props.user && !this.state.myArticle) {
      if (this.props.userRatingResponse
      !== nextProps.userRatingResponse
      && nextProps.userRatingResponse.userRating) {
        nextProps.userRatingResponse.userRating.articleRating && this.setState({
          rating: nextProps.userRatingResponse.userRating.articleRating || null,
        });
        return true;
      }
    }
    return true;
  }

  /**
   *
   * @returns {JSX} -
   * @memberof Ratings
   */
  render() {
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      if (this.state.rating != null && this.state.rating >= i) {
        stars.push(<Star
                      onClick={() => this.rate(i)}
                      onMouseOver={() => this.starOver(i)}
                      onMouseOut={() => this.starOut()}
                      index={i}
                      key={i}
                      color="#ecd018"
                      fill="#ecd018"
                          />);
      } else {
        stars.push(<Star
                      onClick={() => this.rate(i)}
                      onMouseOver={() => this.starOver(i)}
                      onMouseOut={() => this.starOut()}
                      key={i}
                      color="#D0D0D1"
                      index={i}
                      />);
      }
    }
    return (
      <div>
        <div>
          {this.props.user && !this.state.myArticle && stars}
        </div>
        <div>
          Average rating <div className="num--rate">
          {this.props.averageRating.averageRating
            ? this.props.averageRating.averageRating.toFixed(2) : null }
          </div>
        </div>
      </div>
    );
  }
}


export default Ratings;
