let init = async function () {
    // Checks required environment variables
    checkEnv('ONTRACK_URL')
    checkEnv('ONTRACK_TOKEN')

    // Ontrack-friendly outputs
    const githubRepo = process.env.GITHUB_REPOSITORY
    const index = githubRepo.indexOf('/')
    if (index > 0) {
        process.env.ONTRACK_GITHUB_REPOSITORY = githubRepo.substring(index + 1);
    } else {
        process.env.ONTRACK_GITHUB_REPOSITORY = githubRepo;
    }

    // No output
    return {};
}

module.exports = init;

function checkEnv(name) {
    if (!process.env[name]) {
        throw new Error(`${name} environment variable is expected.`)
    }
}
