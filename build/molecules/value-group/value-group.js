"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueGroup = exports.default = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../..");
/**
 * @load ./value-group.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see ValueGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-value-group--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
const ValueGroup = (props) => {
    const { label, value, children } = props;
    return (react_1.default.createElement(__1.Box, { mb: "xl" },
        react_1.default.createElement(__1.Label, { variant: "light" }, label),
        value ? react_1.default.createElement(__1.Text, null, value) : '',
        children));
};
exports.default = ValueGroup;
exports.ValueGroup = ValueGroup;
