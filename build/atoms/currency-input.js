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
exports.formatCurrencyProperty = exports.CurrencyInput = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const react_currency_input_field_1 = __importStar(require("react-currency-input-field"));
Object.defineProperty(exports, "formatCurrencyProperty", { enumerable: true, get: function () { return react_currency_input_field_1.formatValue; } });
const input_1 = require("./input");
const css_class_1 = require("../utils/css-class");
/**
 * @classdesc
 *
 * <img src="components/currency-input.png" />
 *
 * Wrapped `currencyinput` html element.
 *
 * ### Usage
 *
 * ```ts
 * import { CurrencyInput, CurrencyInputProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-currencyinput--default Storybook}
 * @see CurrencyInputProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="currencyinput1">Some example label</Label>
 *      <CurrencyInput id="currencyinput1" intlConfig={{ locale: 'en-US', currency: 'GBP' }} />;
 *   </Box>
 * )
 * @section design-system
 */
const CurrencyInput = styled_components_1.default(react_currency_input_field_1.default) `
  ${input_1.InputCSS}
  ${styled_system_1.space};
  ${styled_system_1.layout};
  ${styled_system_1.typography};

  width: 100%;
`;
exports.CurrencyInput = CurrencyInput;
CurrencyInput.defaultProps = {
    px: 'default',
    py: 'sm',
    className: css_class_1.cssClass('CurrencyInput'),
};
exports.default = CurrencyInput;
