const core = require('@actions/core');
const init = require('./init');

try {
    const logging = core.getInput('logging')
    const environment = {};

    const outputs = init(environment);

    if (logging) {
        console.log("Output = ", outputs);
        console.log("Environment = ", environment);
    }

    for (const property in outputs) {
        core.setOutput(property, outputs[property]);
    }
    for (const property in environment) {
        core.exportVariable(property, environment[property]);
    }
} catch (error) {
    core.setFailed(error.message);
}
