"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundaryProvider = exports.hasErrorBoundary = void 0;
const react_1 = __importDefault(require("react"));
const DefaultErrorBoundary_1 = __importDefault(require("./DefaultErrorBoundary"));
const ErrorBoundaryProvider_1 = __importDefault(require("./context/ErrorBoundaryProvider"));
exports.ErrorBoundaryProvider = ErrorBoundaryProvider_1.default;
/**
 * This is a higher-order function that wraps a React component with an error boundary.
 * @param WrappedComponent - a React component that will be wrapped with an error boundary.
 * @returns The `hasErrorBoundary` function returns a higher-order component that wraps the
 * `WrappedComponent` with an `ErrorBoundary` component. The `ErrorBoundaryWrapper` function is the
 * actual higher-order component that takes in `props` and returns the `ErrorBoundary` component with
 * the `WrappedComponent` passed as a child with the `props` spread into it.
 */
function hasErrorBoundary(WrappedComponent) {
    return function ErrorBoundaryWrapper(props) {
        return (react_1.default.createElement(DefaultErrorBoundary_1.default, null,
            react_1.default.createElement(WrappedComponent, Object.assign({}, props))));
    };
}
exports.hasErrorBoundary = hasErrorBoundary;
//# sourceMappingURL=index.js.map