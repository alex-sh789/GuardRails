const statuses = ['Queued', 'In Progress', 'Success', 'Failure'];
const findingItem = {
    "type": "",
    "ruleId": "",
    "location": {
        "path": "",
        "positions": {
            "begin": {
                "line": ''
            }
        }
    },
    "metadata": {
        "description": "",
        "severity": ""
    }
};
const initialValues = {
    status: '',
    repositoryName: '',
    findings: [],
    queuedAt: new Date().valueOf(),
    scanningAt: new Date().valueOf(),
    finishedAt: new Date().valueOf()
};
export {initialValues, findingItem, statuses}