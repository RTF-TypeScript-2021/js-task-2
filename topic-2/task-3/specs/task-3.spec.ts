const { isGroup } = require('../index');

test('Method works fine', () => {
    expect(isGroup("([{}])")).toBe(true);
    expect(isGroup("[(])")).toBe(false);
    expect(isGroup("[({})](]")).toBe(false);
    expect(isGroup("([{}])")).toBe(true);
    expect(isGroup("(}")).toBe(false);
});
