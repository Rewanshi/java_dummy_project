import { greet } from '../src/main';

test('greet function', () => {
    expect(greet('World')).toBe('Hello, World!');
});
