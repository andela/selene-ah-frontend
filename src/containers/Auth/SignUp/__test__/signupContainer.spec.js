import { mapDispatchToProps, mapStateToProps } from '../SignUpContainer';

describe('## Signup Container', () => {
  const state = {
    signup: 'me',
  };
  it('should call mapStateToProps', () => {
    expect(mapStateToProps(state)).toEqual({ 0: 'm', 1: 'e' });
  });

  it('should call mapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
