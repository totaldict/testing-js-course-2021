import Cleaner from './cleaner';

describe('Cleaning', () => {
  it('test with correct argument', () => {
    const source = [45, '', 0, 'hello', 4.7, false];
    const result = [45, 'hello', 4.7];
    
    const cleaner = new Cleaner(source);
    
    cleaner.removeFalsyValues();
    cleaner.arr.forEach(
      (element, idx) => expect(element).toEqual(result[idx])
    );
  })

  it('test with incorrect argument', () => {
    const source = 'hello';

    const cleaner = new Cleaner(source);

    expect(cleaner.arr).toBeNull();
  })
});
