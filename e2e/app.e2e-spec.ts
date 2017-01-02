import { LocalcarownerPage } from './app.po';

describe('localcarowner App', function() {
  let page: LocalcarownerPage;

  beforeEach(() => {
    page = new LocalcarownerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
