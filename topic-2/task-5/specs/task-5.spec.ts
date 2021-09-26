// @ts-ignore
import { accurateAreaCalc }  from '../index';

test('MiniMathLib Area work correctly', () => {
    expect(accurateAreaCalc()(6).toFixed(2)).toBe('113.10');
})

