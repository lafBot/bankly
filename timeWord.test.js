const timeWord = require('./timeWord.js');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('checks noon', () => {
    expect(timeWord("12:00")).toBe('noon');
  });

  test('checks midnight', () => {
    expect(timeWord("00:00")).toBe('midnight');
  });

  test('checks twelve twelve am', () => {
    expect(timeWord("00:12")).toBe('twelve twelve am');
  });

  test("checks one o'clock am", () => {
    expect(timeWord("01:00")).toBe("one o'clock am");
  });

  test('checks six oh one am', () => {
    expect(timeWord("06:01")).toBe('six oh one am');
  });

  test('checks six ten am', () => {
    expect(timeWord("06:10")).toBe('six ten am');
  });

  test('checks six eighteen am', () => {
    expect(timeWord("06:18")).toBe('six eighteen am');
  });

  test('checks six thirty am', () => {
    expect(timeWord("06:30")).toBe('six thirty am');
  });

  test('checks ten thirty four am', () => {
    expect(timeWord("10:34")).toBe('ten thirty four am');
  });

  test('checks twelve oh nine pm', () => {
    expect(timeWord("12:09")).toBe('twelve oh nine pm');
  });

  test('checks eleven twenty three pm', () => {
    expect(timeWord("23:23")).toBe('eleven twenty three pm');
  });
});