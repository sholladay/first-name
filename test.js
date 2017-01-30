import test from 'ava';
import firstName from '.';

const { env } = process;
const originalAuthor = Object.getOwnPropertyDescriptor(env, 'GIT_AUTHOR_NAME');

const mockName = (name) => {
    env.GIT_AUTHOR_NAME = name;
};

test.afterEach.always(() => {
    delete env.GIT_AUTHOR_NAME;
    if (originalAuthor) {
        Object.defineProperty(env, 'GIT_AUTHOR_NAME', originalAuthor);
    }
});

test.serial('firstName() is a simple string', async (t) => {
    mockName('Albert Wesker');
    const name = await firstName();
    t.is(typeof name, 'string');
    t.true(name.length > 1);
    t.notRegex(name, /\s/);
    t.is(name, 'Albert');
});

test.serial('respects name changes', async (t) => {
    mockName('Albert Wesker');
    const oldName = await firstName();
    t.is(oldName, 'Albert');

    mockName('Bellatrix Lestrange');
    const newName = await firstName();
    t.is(newName, 'Bellatrix');
});

test.serial('handles non-full names', async (t) => {
    mockName('Jane');
    const name = await firstName();
    t.is(name, 'Jane');
});
