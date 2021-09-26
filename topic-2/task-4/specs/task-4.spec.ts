// @ts-ignore
import { miniMathLib } from '../index';

test('MiniMathLib Area work correctly', () => {
    expect(miniMathLib.circleArea(3).toFixed(2)).toBe('28.26');
})

test('MiniMathLib throws on negativeValue', () => {
    expect(() => {miniMathLib.circleArea(-1)}).toThrow();
})