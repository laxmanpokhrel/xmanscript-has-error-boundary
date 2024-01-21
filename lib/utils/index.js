"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFileNameAndLocation(errorInfo) {
    let fileName = '';
    let errorLocation = '';
    if (errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack) {
        const stackTraceLines = errorInfo.componentStack.split('\n');
        if (stackTraceLines.length > 1) {
            const stackLine = stackTraceLines[1].trim();
            const matches = stackLine.match(/^(.*?)(?:\s\((.*)\))?$/);
            if (matches) {
                [fileName, errorLocation] = matches.slice(1, 3);
            }
        }
    }
    return [fileName.split(' ')[1] || '', errorLocation];
}
exports.default = getFileNameAndLocation;
//# sourceMappingURL=index.js.map