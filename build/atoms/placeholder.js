"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const css_class_1 = require("../utils/css-class");
const linearGradient = (theme) => (`linear-gradient(to right, ${theme.colors.grey60} 8%, ${theme.colors.grey40} 18%, ${theme.colors.grey20} 33%)`);
const StyledPlaceholder = styled_components_1.default.div `
  @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => linearGradient(theme)};
  background-size: 1000px 104px;
  height: 338px;
  position: relative;
  overflow: hidden;
  ${styled_system_1.layout};
`;
/**
 * @classdesc
 *
 * <img src="components/placeholder.png" />
 *
 * Renders placeholder
 *
 * ### Usage
 *
 * ```javascript
 * import { Placeholder, PlaceholderProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see PlaceholderProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-placeholder--default Storybook}
 * @hideconstructor
 * @example <caption>Image placeholder</caption>
 * return (
 *   <Box>
 *     <Placeholder width={100} height={200} />
 *   </Box>
 * )
 *
 * @example <caption>Text placeholder</caption>
 * return (
 *   <Box>
 *     <Label>Some name</Label>
 *     <Placeholder width={400} height={14} />
 *   </Box>
 * )
 * @section design-system
 */
const Placeholder = (_a) => {
    var { as: htmlAs, ref } = _a, other = __rest(_a, ["as", "ref"]);
    return (react_1.default.createElement(StyledPlaceholder, Object.assign({ as: htmlAs }, other, { className: css_class_1.cssClass('Placeholder') })));
};
exports.Placeholder = Placeholder;
exports.default = Placeholder;
