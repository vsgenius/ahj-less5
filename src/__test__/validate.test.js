import { isValidCardHolder,isValidNumber  } from '../js/validate';
test('should be Visa', () => {
  const result = isValidCardHolder(4485539580670324);
  expect(result).toBe('visa');
});
test('should be Visa2', () => {
  const result = isValidCardHolder(4532615267130510);
  expect(result).toBe('visa');
});
test('should be Visa3', () => {
  const result = isValidCardHolder(4539925571398988332);
  expect(result).toBe('visa');
});
test('should be MC', () => {
  const result = isValidCardHolder(5582738364839910);
  expect(result).toBe('mastercard');
});
test('should be MC2', () => {
  const result = isValidCardHolder(2720980948233918);
  expect(result).toBe('mastercard');
});
test('should be mir', () => {
  const result = isValidCardHolder(2200990948233918);
  expect(result).toBe('mir');
});
test('should be false', () => {
  const result = isValidCardHolder(220099094823);
  expect(result).toBe(false);
});
test('should be false', () => {
  const result = isValidCardHolder(3200990948233918);
  expect(result).toBe(false);
});
test('number should be false', () => {
  const result = isValidNumber(3200990948233918);
  expect(result).toBe(false);
});
test('number should be true', () => {
  const result = isValidNumber(5582738364839910);
  expect(result).toBe(true);
});