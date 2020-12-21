const core = require('@actions/core');
const init = require('./init');

try {
    const outputs = init();
    for (const property in outputs) {
        core.setOutput(property, outputs[property]);
    }
} catch (error) {
    core.setFailed(error.message);
}
