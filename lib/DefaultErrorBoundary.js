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
const React = __importStar(require("react"));
const react_1 = require("react");
const errorBoundaryContext_1 = __importDefault(require("./context/errorBoundaryContext"));
const utils_1 = __importDefault(require("./utils"));
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
        var _a, _b;
        const [fileName, errorLocation] = (0, utils_1.default)(this.state.errorInfo);
        if (this.state.errorInfo) {
            const contextProps = this.context;
            if (contextProps === null || contextProps === void 0 ? void 0 : contextProps.errorComponent) {
                return contextProps.errorComponent({
                    fileName,
                    errorLocation,
                    errorMessage: (_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message,
                });
            }
            return (React.createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'start',
                    padding: '.5rem',
                    gap: '.3rem',
                    width: 'full',
                    height: 'full',
                    background: '#ffe6e6',
                } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'start', gap: '.2rem' } },
                    React.createElement("p", { style: { display: 'flex', alignItems: 'center', gap: '.5rem' } },
                        React.createElement("div", { style: { display: 'flex', gap: '.1rem', alignItems: 'center' } },
                            React.createElement("i", { className: "material-symbols-outlined", style: { fontSize: '1.2rem', color: '#ff1a1a' } }, "priority_high"),
                            React.createElement("a", { href: errorLocation, target: "_blank", rel: "noopener noreferrer", style: { color: 'blue' } },
                                fileName,
                                " \u2192"))),
                    React.createElement("div", { style: {
                            display: 'flex',
                            background: '#f0f0f5',
                            paddingBlock: '2px',
                            paddingInline: '8px',
                        } }, (_b = this.state.error) === null || _b === void 0 ? void 0 : _b.message))));
        }
        return this.props.children;
    }
}
DefaultErrorBoundary.contextType = errorBoundaryContext_1.default; // Set the contextType property outside the class body
exports.default = DefaultErrorBoundary;
//# sourceMappingURL=DefaultErrorBoundary.js.map