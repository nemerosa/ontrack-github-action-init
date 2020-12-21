const core = require('@actions/core');
const init = require('./init');

try {
    const environment = {};

    const outputs = init(environment);

    for (const property in outputs) {
        const value = outputs[property];
        core.debug(`Output ${property} ==> ${value}`)
        core.setOutput(property, value);
    }
    for (const property in environment) {
        const value = environment[property];
        core.debug(`Environment ${property} ==> ${value}`)
        core.exportVariable(property, value);
    }
} catch (error) {
    core.setFailed(error.message);
}
