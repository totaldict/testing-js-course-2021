/**
 * @jest-environment jsdom
 */
jest.mock('node-fetch');
jest.mock('../app/auth/authentication');
// jest.mock('../app/auth/authentication', () => jest.fn().mockImplementation(() =>  {
//   return { instance: mockAuthInstance};
// }));

import fetch, { Response } from 'node-fetch';
// import { mockDeep } from 'jest-mock-extended';
import { Authentication } from "../app/auth/authentication";
import { Http } from "../app/http/http";
// import Authentication, { mockAuthInstance } from './__mocks__/authentication';

describe('Http', () => {
  const path = '12345';
  const body = { article:
    {
      title : "Hello",
      description: "world",
      body: "Hello world!",
    }
  };
  const apiUrl = 'https://conduit.productionready.io/api/';
  const url = `${apiUrl}${path}`;
  const headers = {"headers": {"Accept": "application/json, text/plain, */*", "Content-Type": "application/json"}};
  const http = new Http();

  // beforeEach(() => {
  //   // Clear all instances and calls to constructor and all methods:
  //   Authentication.mockClear();
  //   mockAuthInstance.mockClear();
  // });

  it('doGet without authentication', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response('4')));

    const result = await http.doGet(path, false);
    
    expect(fetch).toHaveBeenCalledWith(url, headers);
  });

  it('doGet with authentication, undefined instance', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response('4')));
    
    // const authentication = new Authentication();
    // Object.defineProperty(authentication, 'prop', {
    //   get: jest.fn().mockReturnValue(mockAuthInstance),
    //   set: jest.fn()
    // });
    // const authentication = new Authentication();
    // authentication.instance = jest.fn().mockReturnValue({auth: auth});
    // authentication.instance.auth = jest.fn().mockReturnValue(auth);
    
    const result = await http.doGet(path, true);
    expect(fetch).toHaveBeenCalledWith(url, headers);
  });
  
  it('doGet with undefined url attribute', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response('4')));

    const result = await http.doGet(undefined, undefined);
    
    expect(fetch).toHaveBeenCalledWith(`${apiUrl}undefined`, headers);
  });

  it('doPost without authentication', async () => {
    const headers = {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
      };

    const myBlob = '{result: true}';
    const init = { status : 200 , statusText : 'Test Response!' };
    const response = new Response(myBlob, init);

    fetch.mockImplementation(() => Promise.resolve(response));
    
    const result = await http.doPost(path, body, false);
    
    expect(fetch).toHaveBeenCalledWith(url, {
      headers: headers,
      method: 'POST',
      body: body
    });
  });


});
