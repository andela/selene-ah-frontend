import React from 'react';
import { shallow } from 'enzyme';
import { Ratings } from '../Ratings';

describe('## Rating Component', () => {
  let wrapper;
  const props = {
    response: {
      article: {
        userId: 6,
      },
    },
    postRating: jest.fn(),
    fetchAverageRating: jest.fn(),
    userRatingResponse: {
      userRating: {
        articleRating: 5,
      },
    },
    averageRating: {},
    user: {
      id: '6',
    },
  };

  beforeAll(() => {
    wrapper = shallow(<Ratings {...props}/>);
  });

  it('should render the star component', () => {
    wrapper.setState({
      rating: 3,
    });
    const container = wrapper.find('Star');
    expect(container.length).toEqual(5);
  });

  it('should post a rating', () => {
    const container = wrapper.find('Star');
    expect(container.length).toEqual(5);
  });

  it('should simulate click on star', () => {
    wrapper.setState({
      rating: 3,
    });
    const container = wrapper.find('Star');
    container.at(0).simulate('click');
    expect(wrapper.instance().rate()).toBeCalled;
  });

  it('should simulate mouse hover on star', () => {
    wrapper.setState({
      rating: 3,
    });
    const container = wrapper.find('Star');
    container.at(0).simulate('mouseover');
    expect(wrapper.instance().starOver()).toBeCalled;
  });

  it('should simulate mouse out on star', () => {
    wrapper.setState({
      rating: 3,
    });
    const container = wrapper.find('Star');
    container.at(0).simulate('mouseout');
    expect(wrapper.instance().starOut()).toBeCalled;
  });

  it('should simulate mouse out on star', () => {
    const container = wrapper.find('Star');
    container.at(4).simulate('mouseout');
    expect(wrapper.instance().starOut()).toBeCalled;
  });

  it('should simulate mouse out on star', () => {
    const container = wrapper.find('Star');
    container.at(4).simulate('mouseover');
    expect(wrapper.instance().starOut()).toBeCalled;
  });

  it('should simulate click on star', () => {
    const container = wrapper.find('Star');
    container.at(4).simulate('click');
    expect(wrapper.instance().rate()).toBeCalled;
  });

  it('should call ComponentDidMount', () => {
    const newProps = {
      response: {
        article: {
          userId: 6,
        },
      },
      postRating: jest.fn(),
      fetchAverageRating: jest.fn(),
      userRatingResponse: {
        userRating: {
          articleRating: 5,
        },
      },
      averageRating: {},
      user: {
        id: 6,
      },
    };
    shallow(<Ratings {...newProps} />);
  });

  it('should return true if there is no error', () => {
    // wrapper.setState({ myArticle: true });
    const nextProps = {
      userRatingResponse: {
        userRating: {
          articleRating: 2,
        },
      },
    };
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(true);
  });
});
