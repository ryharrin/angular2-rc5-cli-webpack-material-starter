import { AngularRc5StarterPage } from './app.po';

describe('angular-rc5-starter App', function() {
  let page: AngularRc5StarterPage;

  beforeEach(() => {
    page = new AngularRc5StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
