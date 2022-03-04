import 'regenerator-runtime/runtime';
import {shouldShowMessage} from '../src/shouldShowMessage';
import {detectCountry} from "../src/detectCountry";
import {detectLanguage} from "../src/detectLanguage";

jest.mock("../src/detectCountry", () => ({
    detectCountry: jest.fn(async () => 'US')
}));

jest.mock("../src/detectLanguage", () => ({
    detectLanguage: jest.fn(() => 'us')
}));

jest.mock("../src/dismiss", () => ({
    isDismissed: jest.fn(() => false)
}));

test('Test should show message with always', async () => {
    detectCountry.mockImplementation(async () => 'US');
    detectLanguage.mockImplementation(() => 'us');
    let shouldShow = await shouldShowMessage('always');
    expect(shouldShow).toBe(true);
})

test('Test show US, en-US', async () => {
    detectCountry.mockImplementation(async () => 'US');
    detectLanguage.mockImplementation(() => 'us');
    expect(await shouldShowMessage('country')).toBe(false);
    expect(await shouldShowMessage('lang')).toBe(false);
    expect(await shouldShowMessage('lang,country')).toBe(false);
    expect(await shouldShowMessage('lang, country')).toBe(false);
    expect(await shouldShowMessage('')).toBe(false);
})

test('Test show RU, ru-RU', async () => {
    detectCountry.mockImplementation(async () => 'RU');
    detectLanguage.mockImplementation(() => 'ru');
    expect(await shouldShowMessage('country')).toBe(true);
    expect(await shouldShowMessage('lang')).toBe(true);
    expect(await shouldShowMessage('lang,country')).toBe(true);
    expect(await shouldShowMessage('lang, country')).toBe(true);
    expect(await shouldShowMessage('')).toBe(false);
})

test('Test show RU, en-US', async () => {
    detectCountry.mockImplementation(async () => 'RU');
    detectLanguage.mockImplementation(() => 'en');
    expect(await shouldShowMessage('country')).toBe(true);
    expect(await shouldShowMessage('lang')).toBe(false);
    expect(await shouldShowMessage('lang,country')).toBe(true);
    expect(await shouldShowMessage('lang, country')).toBe(true);
    expect(await shouldShowMessage('')).toBe(false);
})

test('Test show US, ru-RU', async () => {
    detectCountry.mockImplementation(async () => 'US');
    detectLanguage.mockImplementation(() => 'ru');
    expect(await shouldShowMessage('country')).toBe(false);
    expect(await shouldShowMessage('lang')).toBe(true);
    expect(await shouldShowMessage('lang,country')).toBe(true);
    expect(await shouldShowMessage('lang, country')).toBe(true);
    expect(await shouldShowMessage('')).toBe(false);
})