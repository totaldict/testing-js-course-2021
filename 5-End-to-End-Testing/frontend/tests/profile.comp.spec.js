/**
 * @jest-environment jsdom
 */
import { ProfileComponent } from '../app/pages/profile.comp'
import jsdom from 'jsdom';

describe('ProfileComponent', () => {

  xit('generateArticle', async () => {
    const article = {
      author: {
        bio: null,
        following: true,
        image: "https://static.productionready.io/images/smiley-cyrus.jpg",
        username: "bogus123",
      },
      body: "Never forget who you are. The rest of the world won't. Wear it like an armor and it can never be used against you.",
      createdAt: "2021-03-16T19:21:39.735Z",
      description: "Oros",
      favorited: true,
      favoritesCount: 14,
      slug: "aegon-frey-36ygln",
      tagList: ["HITLER"],
      title: "Aegon Frey",
      updatedAt: "2021-03-16T19:21:39.735Z",
    }
    const $globalFeed = jest.fn();
    const profileComponent = new ProfileComponent();
    // profileComponent.generateArticle(article);
  // const fetch = jest.fn();
  // const http = new Http();
  // const result = await http.doGet('12345', false);
  // // config.rest_url замокать

    expect($globalFeed).toEqual('123');
  });
});
  