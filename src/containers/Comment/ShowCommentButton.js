import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import './comment.scss';


/**
 * @description The component to write comment
 * @class
 */
export class WriteComment extends Component {
    static propTypes = {
      showResponse: PropTypes.func,
      viewComment: PropTypes.bool,
      loading: PropTypes.bool,
    }


    /**
     * @returns {JSX} The write comment page html
     */
    render() {
      return (
        <Fragment>
          {
            (!this.props.viewComment) ? (
              <div className='button-center' >
                <button onClick={this.props.showResponse}
                  className='comment-button'>Show Comments</button>
                {
                  this.props.loading ? (
                    <ClipLoader
                      sizeUnit='px'
                      size={30}
                      color={'#2C2360'}
                      loading={true}
                    />) : (
                    null)
                }
              </div>) : (null) }
        </Fragment>
      );
    }
}

export default WriteComment;
