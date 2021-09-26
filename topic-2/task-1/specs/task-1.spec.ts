const { removeSmallest } = require('../index');

test('Method works fine', () => {
    expect(removeSmallest([1, 2, 3, 1, 4, 8, 1])).toEqual([2, 3, 1, 4, 8, 1]);
    expect(removeSmallest([6, 2, 3, 1, 4, 8, 1])).toEqual([6, 2, 3, 4, 8, 1]);
});

test('Method returns empty array', () => {
    expect(removeSmallest([])).toEqual([]);
});
