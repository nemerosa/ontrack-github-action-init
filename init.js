let init = async function () {
    // Checks required environment variables
    checkEnv('ONTRACK_URL')
    checkEnv('ONTRACK_TOKEN')

    // Ontrack-friendly outputs
    const githubRepo = process.env.GITHUB_REPOSITORY
    const index = githubRepo.indexOf('/')
    if (index > 0) {
        return {
            repository: githubRepo.substring(index + 1)
        };
    } else {
        return {
            repository: githubRepo
        };
    }
}

module.exports = init;

function checkEnv(name) {
    if (!process.env[name]) {
        throw new Error(`${name} environment variable is expected.`)
    }
}
