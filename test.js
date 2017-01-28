import test from 'ava';
import firstName from '.';

test('firstName() is a simple string', async (t) => {
    const name = await firstName();
    t.is(typeof name, 'string');
    t.truthy(name);
    t.notRegex(name, /\s/);
});
