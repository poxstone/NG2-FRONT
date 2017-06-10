import { GAEPage } from './app.po';

describe('gae App', () => {
  let page: GAEPage;

  beforeEach(() => {
    page = new GAEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
