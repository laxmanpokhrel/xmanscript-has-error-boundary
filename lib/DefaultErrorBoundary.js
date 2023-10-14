"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/jsx-curly-brace-presence */
const React = __importStar(require("react"));
const react_1 = require("react");
const errorBoundaryContext_1 = __importDefault(require("./context/errorBoundaryContext"));
class DefaultErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
        if (this.props.showError === false) {
            this.state.error = null;
            this.state.errorInfo = null;
        }
    }
    componentDidCatch(error, info) {
        this.setState({ error, errorInfo: info });
    }
    render() {
        if (this.state.errorInfo) {
            const [fileName, errorLocation] = this.state.errorInfo.componentStack.split('\n ')[1].trim().split(' (');
            const contextProps = React.useContext(errorBoundaryContext_1.default);
            if (contextProps === null || contextProps === void 0 ? void 0 : contextProps.errorComponent) {
                return contextProps.errorComponent({
                    fileName: 'Your default file name',
                    errorLocation,
                    // errorLocation: 'Your default error location',
                });
            }
            return (React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("i", { className: "material-symbols-outlined" }, "running_with_errors"),
                    React.createElement("p", null, " An Error Occurred !")),
                React.createElement("p", null, fileName)));
        }
        return this.props.children;
    }
}
exports.default = DefaultErrorBoundary;
//# sourceMappingURL=DefaultErrorBoundary.js.map