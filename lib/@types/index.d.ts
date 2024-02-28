/// <reference types="react" />
export type ErrorComponentProps = {
    fileName: string;
    errorLocation: string;
    errorMessage: string | undefined;
};
export type ErrorComponentType = (props: ErrorComponentProps) => JSX.Element;
export type ContextValueType = {
    errorComponent?: ErrorComponentType;
};
export type GoodComponent<T> = (props: React.PropsWithChildren<T>) => React.JSX.Element;
