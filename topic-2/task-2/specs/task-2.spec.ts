const { arrayStripped } = require('../index');

test('Method works fine', () => {
    expect(arrayStripped([1, 2, 3, 4], 1)).toEqual([ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ])
    expect(arrayStripped(['a', 'b', 'c', 'd'], 3)).toEqual([ [ 'a', 'b', 'c' ], [ 'd' ] ]);
    expect(arrayStripped([], 2)).toEqual([ ]);
    expect(arrayStripped(undefined, 5)).toEqual([]);
    expect(() => {arrayStripped(null, null)}).toThrow();
    expect(() => {arrayStripped([1, 5, 7], null)}).toThrow();
});

test('Method gets incorrect data', () => {
    expect(arrayStripped('text', 5)).toEqual([]);
    expect(() => {arrayStripped(5, 'text')}).toThrow();
})