import { CliTest2Page } from './app.po';

describe('cli-test-2 App', function() {
  let page: CliTest2Page;

  beforeEach(() => {
    page = new CliTest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
