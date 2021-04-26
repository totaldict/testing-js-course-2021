/**
 * @jest-environment jsdom
 */
import { Http } from "../app/http/http";
import {RouterHandler} from "../app/router/router-handler";

describe('Http', () => {
  const http = new Http();
  const router = new RouterHandler();

  it('doGet without authentication', async () => {
    const url = 'https://conduit.productionready.io/api/';
    const path = 'articles?limit=10&offset=0';
    const result = await http.doGet(path, false);

    expect(result.url).toEqual(`${url}${path}`);
  });

  it('doGet with authentication', async () => {
    const url = 'https://conduit.productionready.io/api/';
    const path = 'articles?limit=10&offset=0';
    const result = await http.doGet(path, true);

    expect(result.url).toEqual(`${url}${path}`);
  });

  xit('doPost without authentication', async () => {
    const url = 'https://conduit.productionready.io/api/';
    const path = "/articles/big-title-2l4ui0/comments";
    const body = '{"comment":{"body":"Hello 3"}}';
    const result = await http.doPost(path, body, false);

    expect(result).toEqual(`${url}${path}`);
  });

});
