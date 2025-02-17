"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
/* eslint-disable import/prefer-default-export */
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = require("./box/box");
const css_class_1 = require("../utils/css-class");
const Spinner = styled_components_1.default.div.attrs({
    className: 'lds-facebook',
}) `
  & {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  & div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: ${({ theme }) => theme.colors.primary100};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%, 100% {
      top: 19px;
      height: 26px;
    }
  }

`;
/**
 * @classdesc
 *
 * <img src="components/loader.png" />
 *
 * Simple loader
 *
 * ### Usage
 *
 * ```javascript
 * import { Loader } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-loader--default Storybook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Loader/>
 * )
 * @section design-system
 */
const Loader = () => (react_1.default.createElement(box_1.Box, { p: "x3", style: { textAlign: 'center' }, "data-testid": "Loader", className: css_class_1.cssClass('Loader') },
    react_1.default.createElement(Spinner, null,
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null),
        react_1.default.createElement("div", null))));
exports.Loader = Loader;
exports.default = Loader;
