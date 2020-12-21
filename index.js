const core = require('@actions/core');
const init = require('./init');

const environment = {};

init(environment).then((outputs) => {
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
}).catch((err) => {
    core.setFailed(err.message);
});
