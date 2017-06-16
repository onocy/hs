import { Proj2Page } from './app.po';

describe('proj2 App', () => {
  let page: Proj2Page;

  beforeEach(() => {
    page = new Proj2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
