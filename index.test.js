const process = require('process');
const init = require('./init');

test('missing URL', async () => {
    await expect(init()).rejects.toThrow('ONTRACK_URL environment variable is expected.');
});

test('missing token', async () => {
    process.env['ONTRACK_URL'] = 'http://localhost:8080';
    await expect(init()).rejects.toThrow('ONTRACK_TOKEN environment variable is expected.');
});

describe('Ontrack environment is set', () => {

    beforeEach(() => {
        process.env['ONTRACK_URL'] = 'http://localhost:8080';
        process.env['ONTRACK_TOKEN'] = 'super-secret-token';
    });

    test('GitHub repository name', async () => {
        process.env.GITHUB_REPOSITORY = 'nemerosa/ontrack';
        const environment = {};
        await expect(init(environment)).resolves.toEqual({
            repository: 'ontrack'
        });
        expect(environment.ONTRACK_GITHUB_REPOSITORY).toEqual('ontrack');
    });
});

