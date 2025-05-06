// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// TODO - Part 2
// isPhoneNumber tests
test('valid phone number (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number: too short', () => {
  expect(isPhoneNumber('123-45')).toBe(false);
});

test('invalid phone number: random text', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});

// isEmail tests
test('valid email test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email hello@domain.org', () => {
  expect(isEmail('hello@domain.org')).toBe(true);
});

test('invalid email missing @', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email missing name', () => {
  expect(isEmail('@example.com')).toBe(false);
});

// isStrongPassword tests
test('valid password Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('valid password Hello_123', () => {
  expect(isStrongPassword('Hello_123')).toBe(true);
});

test('invalid password too short', () => {
  expect(isStrongPassword('a1_')).toBe(false);
});

test('invalid password starts with number', () => {
  expect(isStrongPassword('1abc123')).toBe(false);
});

// isDate tests
test('valid date 12/25/2023', () => {
  expect(isDate('12/25/2023')).toBe(true);
});

test('valid date 1/1/2020', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('invalid date wrong format', () => {
  expect(isDate('2023-12-25')).toBe(false);
});

test('invalid date with text', () => {
  expect(isDate('December 25, 2023')).toBe(false);
});

// isHexColor tests
test('valid hex color #ABC', () => {
  expect(isHexColor('#ABC')).toBe(true);
});

test('valid hex color #abcdef', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('invalid hex color missing #', () => {
  expect(isHexColor('12345')).toBe(false);
});

test('invalid hex color too long', () => {
  expect(isHexColor('#1234567')).toBe(false);
});