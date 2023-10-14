export default function getFileNameAndLocation(errorInfo: any): string[] {
  let fileName = '';
  let errorLocation = '';

  if (errorInfo?.componentStack) {
    const stackTraceLines = errorInfo.componentStack.split('\n');
    if (stackTraceLines.length > 1) {
      const stackLine = stackTraceLines[1].trim();
      const matches = stackLine.match(/^(.*?)(?:\s\((.*)\))?$/);
      if (matches) {
        [fileName, errorLocation] = matches.slice(1, 3);
      }
    }
  }

  return [fileName, errorLocation];
}
