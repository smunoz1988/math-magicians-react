import operate from "../logic/operate";

describe('test operate', () => {
  test('subtract numbers', () => {
    const test = operate(8, 4, '-');
    expect(test).toBe('4');
  })
  test('plus two numbers', () => {
    const test = operate(8, 4, '+');
    expect(test).toBe('12');
  })
  test('times two numbers', () => {
    const test = operate(3, 2, 'x');
    expect(test).toBe('6');
  })
  test('divide two numbers', () => {
    const test = operate(10, 2, '÷');
    expect(test).toBe('5');
  })
  test('divide a number by 0', () => {
    const test = operate(10, 0, '÷');
    expect(test).toBe("Can't divide by 0.");
  })
  test('Module a number by 0', () => {
    const test = operate(10, 0, '%');
    expect(test).toBe("Can't find modulo as can't divide by 0.");
  })
  test('Module a number by 0', () => {
    const test = operate(7, 5, '%');
    expect(test).toBe('2');
  })
});
