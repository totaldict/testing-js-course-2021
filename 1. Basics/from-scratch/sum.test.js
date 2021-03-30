import sum from './sum';

test('Sum is working corretly on integer numbers', () => {
    // Arrange
    const a = 1;
    const b = 2;
    const expectedResult = a + b;

    // Act 
    const result = sum(a, b);

    // Assert
    expect(result).toBe(expectedResult);
});