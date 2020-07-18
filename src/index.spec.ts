import MyLibrary from './index';

describe('My Test', () => {
  it('Should export Hello World', () => {
    expect(MyLibrary).toEqual('Hello, World');
  });
});
