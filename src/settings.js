export function getSetting(variableName) {
    const variablePrefix = 'REACT_APP_';
    const variableFullName = variablePrefix + variableName;

    console.log("Consulting environment variable: " + variableFullName);

    return process.env[variableFullName];
}