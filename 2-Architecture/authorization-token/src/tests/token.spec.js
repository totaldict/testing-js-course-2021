import Token from '../token';

describe('Token', () => {
  it('Null must be returned for empty string', () => {
    const source = '';
    
    const token = new Token();
    const result = token.getToken(source);
    
    expect(result).toBeNull();
  })

  it('Token must be returned for a "normal" string', () => {
    const expectedResult = 'vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF';
    const source = `Bearer ${expectedResult}`;

    const token = new Token();
    const result = token.getToken(source);
    
    expect(result).toEqual(expectedResult);
  })

  it('Token length must not be less than 10 chars', () => {
    const source = `Bearer lilToken`;
    const token = new Token();
    
    expect(() => token.getToken(source)).toThrow(Error);
  })

  it('Token contains punctuation marks', () => {
    const leftPart = 'Bearer vCVVCHjT';
    const rightPart = 'ylu2lMtEf5w';
    const marks = [...'~!@#$%^&*()_-+=|?><']; // можно, конечно через charAt и диапазоны ASCII, но для нашего теста этого достаточно

    const token = new Token();

    marks.forEach((mark) =>
      expect(() => token.getToken(`${leftPart}${mark}${rightPart}`)).toThrow(Error));
  })

  it('Token contains Cyrillic', () => {
    const source = `Bearer vCVVCHjTПривет1u2lMtEf5w`; // см. камент выше
    const token = new Token();
    
    expect(() => token.getToken(source)).toThrow(Error);
  })
});
