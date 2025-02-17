"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const button_css_1 = __importDefault(require("./button-css"));
const utils_1 = require("../../utils");
const addContent = styled_components_1.css `
  &:before {
    content: "${({ label }) => label}";
  }
`;
/**
 * @load ./button.doc.md
 * @component
 * @see ButtonProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-button--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @section design-system
 */
const Button = styled_components_1.default.button.attrs((props) => ({
    className: utils_1.cssClass('Button', props.className),
})) `
  font-size: ${utils_1.themeGet('fontSizes', 'default')};
  background-color: transparent;
  ${button_css_1.default};
  ${({ label }) => (label ? addContent : '')};
`;
exports.Button = Button;
exports.default = Button;
