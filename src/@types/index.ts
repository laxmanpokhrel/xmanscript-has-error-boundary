/* eslint-disable no-unused-vars */

export type ErrorComponentProps = { fileName: string; errorLocation: string };
export type ErrorComponentType = ({ fileName, errorLocation }: ErrorComponentProps) => JSX.Element;

export type ContextValueType = { errorComponent: ErrorComponentType };
