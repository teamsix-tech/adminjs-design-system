"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = exports.default = void 0;
/* eslint-disable react/no-array-index-key */
const react_1 = __importDefault(require("react"));
const button_group_styled_1 = require("./button-group.styled");
const button_in_group_1 = require("./button-in-group");
/**
 * @load ./button-group.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-button-group--default Storybook}
 * @component
 * @subcategory Organisms
 * @section design-system
 * @new in version 3.3
 */
const ButtonGroup = (props) => {
    const { buttons, size, rounded } = props;
    if (!buttons || !buttons.length) {
        return null;
    }
    return (react_1.default.createElement(button_group_styled_1.StyledButtonGroup, Object.assign({}, props), buttons.map((button, i) => (react_1.default.createElement(button_in_group_1.ButtonInGroup, Object.assign({ key: `${button.label || ''}-${i}`, size: size, rounded: rounded }, button, { className: button_group_styled_1.BUTTON_IN_GROUP_CLASS_NAME }))))));
};
exports.default = ButtonGroup;
exports.ButtonGroup = ButtonGroup;
