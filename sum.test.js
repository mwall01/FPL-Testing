const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});

test('adds 0 + 100 to equal 100', () => {
  expect(sum(0, 100)).toBe(100);
});

test('adds 0 + 100 to not equal 5', () => {
  expect(sum(0, 100)).not.toBe(5);
});

test('adding positive numbers is not zero', () => {
  for (let x = 1; x < 10; x++) {
    expect(x).not.toBe(0);
  }
});

test('there is a "cha" in Michael', () => {
  expect('Michael').toMatch(/cha/);
  expect('Michael').not.toMatch(/tony/);
});

const recipe = [
  'spagooter',
  'passata',
  'roast beouf',
  'haype o chilli',
];

test('There\'s passata in the recipe baby', () => {
  expect(recipe).toContain('passata');
});

function expectedError() {
  throw new Error('Received 502 error code');
}

test('502 received', () => {
  expect(() => expectedError()).toThrow();
  expect(() => expectedError()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => expectedError()).toThrow('Received 502 error code');
  expect(() => expectedError()).toThrow(/502/);
});

function fetchData() {
  return "peanut butter";
}

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});
