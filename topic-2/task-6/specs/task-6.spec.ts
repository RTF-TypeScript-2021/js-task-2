// @ts-ignore
import { cylinderVolumeAccurate, miniMathLibExtended }  from '../index';

test('miniMathLibExtended volume work correctly', () => {
    expect(miniMathLibExtended.volume(6, 12).toFixed(2)).toBe('1356.48');
})


test('cylinderVolumeAccurate volume work correctly', () => {
    expect(cylinderVolumeAccurate(3)(6, 12).toFixed(2)).toBe('1296.00');
})

test('miniMathLibExtended throws error', () => {
    expect(() => {miniMathLibExtended.volume(-6, 12)}).toThrow();
})