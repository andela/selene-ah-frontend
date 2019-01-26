/* eslint-disable max-len */
import * as ActionTypes from '../../../actions/userStat/actionTypes';
import reducer, { initialState as defaultState } from '../Statistics';
import updateObject from '../../../helpers/store/utility';

describe('##User statistics Reducer - SUCCESS', () => {
  it('should update state when GET_ARTICLES_STAT_SUCCESS is triggered', () => {
    const payload = {
      noOfreaders: 1,
      totalNoOfReadingTime: 1,
      noOfWrittenArticles: 1,
    };
    expect(reducer(defaultState, { type: ActionTypes.GET_ARTICLES_STAT_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        userArticleStat: payload,
      }),
    );
  });
  it('should update state when GET_FOLLOWERS_SUCCESS is triggered', () => {
    const payload = {
      newFollowers: 1,
      totalFollowers: 1,
    };
    expect(reducer(defaultState, { type: ActionTypes.GET_FOLLOWERS_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        noUserFollowerStat: payload,
      }),
    );
  });

  it('should update state when GET_LIKED_ARTICLES_SUCCESS is triggered', () => {
    const payload = 1;
    expect(reducer(defaultState, { type: ActionTypes.GET_LIKED_ARTICLES_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        userArticleLike: payload,
      }),
    );
  });

  it('should update state when GET_COMMENT_STAT_SUCCESS is triggered', () => {
    const payload = 1;
    expect(reducer(defaultState, { type: ActionTypes.GET_COMMENT_STAT_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        commentStat: payload,
      }),
    );
  });

  it('should update state when GET_BOOKMARK_STAT_SUCCESS is triggered', () => {
    const payload = 1;
    expect(reducer(defaultState, { type: ActionTypes.GET_BOOKMARK_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        bookmarkStat: payload,
      }),
    );
  });
  it('should update state when FOLLOWING_OTHERS_STAT_SUCCESS is triggered', () => {
    const payload = 1;
    expect(reducer(defaultState, { type: ActionTypes.FOLLOWING_OTHERS_STAT_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        usersYouAreFollowing: payload,
      }),
    );
  });
});

describe('##User statistics Reducer - FAILURE', () => {
  const error = 'error occured';
  it('should update state when GET_ARTICLES_STAT_FAILURE is triggered', () => {
    expect(reducer(defaultState, { type: ActionTypes.GET_ARTICLES_STAT_FAILURE, error })).toEqual(
      updateObject(defaultState, {
        statError: true,
        errorMessage: error,
      }),
    );
  });
  it('should update state when GET_FOLLOWERS_FAILURE is triggered', () => {
    expect(reducer(defaultState, { type: ActionTypes.GET_FOLLOWERS_FAILURE, error })).toEqual(
      updateObject(defaultState, {
        statError: true,
        errorMessage: error,
      }),
    );
  });

  it('should update state when GET_LIKED_ARTICLES_FAILURE is triggered', () => {
    expect(reducer(defaultState, { type: ActionTypes.GET_LIKED_ARTICLES_FAILURE, error })).toEqual(
      updateObject(defaultState, {
        statError: true,
        errorMessage: error,
      }),
    );
  });

  it('should update state when GET_COMMENT_STAT_FAILURE is triggered', () => {
    expect(reducer(defaultState, { type: ActionTypes.GET_COMMENT_STAT_FAILURE, error })).toEqual(
      updateObject(defaultState, {
        statError: true,
        errorMessage: error,
      }),
    );
  });

  it('should update state when GET_BOOKMARK_STAT_FAILURE is triggered', () => {
    expect(reducer(defaultState, { type: ActionTypes.GET_BOOKMARK_FAILURE, error })).toEqual(
      updateObject(defaultState, {
        statError: true,
        errorMessage: error,
      }),
    );
  });
  it('should update state when FOLLOWING_OTHERS_STAT_FAILURE is triggered', () => {
    expect(reducer(defaultState, { type: ActionTypes.FOLLOWING_OTHERS_STAT_FAILURE, error })).toEqual(
      updateObject(defaultState, {
        statError: true,
        errorMessage: error,
      }),
    );
  });
});
