let init = async function (environment) {
    // Checks required environment variables
    checkEnv('ONTRACK_URL')
    checkEnv('ONTRACK_TOKEN')

    // Ontrack-friendly outputs
    const outputs = {};
    const githubRepo = process.env.GITHUB_REPOSITORY
    const index = githubRepo.indexOf('/')
    if (index > 0) {
        environment.ONTRACK_GITHUB_REPOSITORY = outputs.repository = githubRepo.substring(index + 1);
    } else {
        environment.ONTRACK_GITHUB_REPOSITORY = outputs.repository = githubRepo;
    }

    // No output
    return outputs;
}

module.exports = init;

function checkEnv(name) {
    if (!process.env[name]) {
        throw new Error(`${name} environment variable is expected.`)
    }
}
