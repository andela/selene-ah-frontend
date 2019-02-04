import { shallow } from 'enzyme';
import React from 'react';
import UserStatistics from './UserStatistics';

const props = {
  articleStat: {
    noOfreaders: 1,
    totalNoOfReadingTime: 1,
    noOfWrittenArticles: 1,
  },
  followerStat: {
    newFollowers: 1,
    totalFollowers: 1,
  },
  articleLikes: 1,
  bookmarkStat: 1,
  commentStat: 1,
};

describe('UserStatics Container', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<UserStatistics
          followerStat={props.followerStat}
          articleLikes={props.articleLikes}
          articleStat={props.articleStat}
          bookmarkStat={props.bookmarkStat}
          commentStat={props.commentStat}
        />);
  });
  it('should find Div', () => {
    const div = wrapper.find('div.minicard-container');
    expect(div.length).toEqual(1);
  });
  it('should find Div', () => {
    const div = wrapper.find('div.minicard-container');
    wrapper.setProps({
      articleStat: {
        totalNoOfReadingTime: 2,
      },
    });
    expect(div.length).toEqual(1);
  });
});
