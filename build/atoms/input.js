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
exports.Input = exports.InputCSS = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const polished_1 = require("polished");
const styled_system_1 = require("styled-system");
const focus_shadow_style_1 = __importDefault(require("../utils/focus-shadow.style"));
const css_class_1 = require("../utils/css-class");
const borderlessCSS = styled_components_1.css `
  padding: 0;
  border-color: transparent;
  border-width: 0 0 1px 0;
  color: ${({ theme }) => theme.colors.grey100};
  &:focus {
    box-shadow: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
  }

  &:hover {
    cursor: pointer;
  }
`;
const sizeVariants = styled_system_1.variant({
    prop: 'variant',
    variants: {
        default: {
            fontSize: 'default',
            lineHeight: 'lg',
        },
        sm: {
            fontSize: 'sm',
            lineHeight: 'default',
        },
        lg: {
            fontSize: 'lg',
            lineHeight: 'xl',
        },
        xl: {
            fontSize: 'xl',
            lineHeight: 'xxl',
        },
        xxl: {
            fontSize: 'h1',
            fontWeight: 'light',
            lineHeight: 'x4',
        },
    },
});
/**
 * Input CSS Styles which can be reused in another input component with styled-components
 *
 * ### Usage:
 *
 * ```
 * import { InputCSS } from '@adminjs/design-system'
 *
 * const MyStyledInput = styled.input`
 *   ${InputCSS}
 * `
 * ```
 * @memberof Input
 * @alias InputCSS
 */
exports.InputCSS = styled_components_1.css `
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey80};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  font-size: ${({ theme }) => theme.fontSizes.default};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  font-family: ${({ theme }) => theme.font};
  outline: none;
  &:hover {
    border-color: ${({ theme }) => theme.colors.grey60};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary100};
    ${({ theme }) => `box-shadow: ${focus_shadow_style_1.default(theme)}`};
  }
  &:disabled {
    color: ${({ theme }) => polished_1.rgba(theme.colors.grey80, 0.5)};
    border-color: ${({ theme }) => polished_1.rgba(theme.colors.inputBorder, 0.5)};
  }

  ${({ borderless }) => (borderless ? borderlessCSS : '')};
  ${sizeVariants};
`;
/**
 * @classdesc
 *
 * <img src="components/input.png" />
 *
 * Wrapped `input` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Input, InputProps, InputCSS } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see InputProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-input--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="input1">Some example label</Label>
 *      <Input id="input1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */
const Input = styled_components_1.default.input `
  ${exports.InputCSS};
  ${styled_system_1.space};
  ${styled_system_1.layout};
`;
exports.Input = Input;
Input.defaultProps = {
    px: 'default',
    py: 'sm',
    className: css_class_1.cssClass('Input'),
};
exports.default = Input;
