import { TeamManagerPage } from './app.po';

describe('team-manager App', function() {
  let page: TeamManagerPage;

  beforeEach(() => {
    page = new TeamManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
