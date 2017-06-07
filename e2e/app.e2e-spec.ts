import { TalkstuffPage } from './app.po';

describe('talkstuff App', () => {
  let page: TalkstuffPage;

  beforeEach(() => {
    page = new TalkstuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
