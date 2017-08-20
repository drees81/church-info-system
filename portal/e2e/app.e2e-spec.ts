import { CloudMessagingPortalPage } from './app.po';

describe('cloud-messaging-portal App', () => {
  let page: CloudMessagingPortalPage;

  beforeEach(() => {
    page = new CloudMessagingPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
