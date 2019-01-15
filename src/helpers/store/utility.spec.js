import updatedObject from './utility';

describe('### upDateObject utility', () => {
  it('should update object if valid parameters is supplied', () => {
    expect(updatedObject({ dan: true, ced: false }, { ced: true })).toEqual(
      { dan: true, ced: true },
    );
  });

  it('should update object if valid parameters is supplied', () => {
    expect(updatedObject({ dan: true, ced: false }, { show: true })).toEqual(
      { dan: true, ced: false, show: true },
    );
  });
});
