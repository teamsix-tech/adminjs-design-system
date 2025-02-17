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
exports.FormGroup = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const label_1 = require("../../atoms/label");
const button_1 = require("../../atoms/button");
const input_1 = require("../../atoms/input");
const currency_input_1 = require("../../atoms/currency-input");
const link_1 = require("../../atoms/link");
const input_group_1 = __importDefault(require("./input-group"));
const formGroupDisabledCSS = styled_components_1.css `
  color: ${({ theme }) => theme.colors.grey40};
`;
const formGroupWithErrorCSS = styled_components_1.css `
  color: ${({ theme }) => theme.colors.error};
  ${input_1.Input}, ${currency_input_1.CurrencyInput} {
    color: ${({ theme }) => theme.colors.error};
    border-color: ${({ theme }) => theme.colors.error};
  }
  &&& ${label_1.Label} {
    color: ${({ theme }) => theme.colors.error};
    &:before {
      color: ${({ theme }) => theme.colors.error};
    }
  }
  &&& ${label_1.Label}, &&& ${button_1.Button}, &&& ${link_1.Link} {
    border-color: ${({ theme }) => theme.colors.error};
  }
`;
/**
 * @classdesc
 *
 * <img src="components/form-group.png" />
 *
 * FormGroup comes with other, from-related components like: FormMessage and InputGroup.
 * Together they allow you to build form elements.
 *
 * ### Usage
 *
 * ```javascript
 * import { FormGroup, FormGroupProps, InputGroup, FormMessage } from '@adminjs/design-system'
 * ```
 *
 * @hideconstructor
 * @component
 * @see FormGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-formgroup--default Storybook}
 * @subcategory Molecules
 * @example <caption>Example 1: input with all sorts of buttons</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 2: the same input with errors</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup error>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 3: disabled field</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup disabled>
 *     <Label>Disabled field</Label>
 *     <InputGroup>
 *       <Input disabled />
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 4: with a link</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label>Some form data with button link</Label>
 *     <InputGroup>
 *       <Input />
 *       <Link href="#someHref">This is link</Link>
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 * @section design-system
 */
const FormGroup = styled_components_1.default.div `
  width: 100%;
  ${({ error }) => (error ? formGroupWithErrorCSS : '')};
  ${({ disabled }) => (disabled ? formGroupDisabledCSS : '')};
  ${styled_system_1.space};

  & > ${input_1.Input}, & > ${currency_input_1.CurrencyInput} {
    width: 100%;
  }

  & ${input_1.Input}, & ${currency_input_1.CurrencyInput} {
    ${({ variant, theme }) => (variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '')};
    ${({ variant, theme }) => (variant === 'filter' ? `color: ${theme.colors.white}` : '')};
  }

  & ${input_group_1.default} {
    ${label_1.Label}, ${button_1.Button}:last-child, ${link_1.Link}:last-child {
      ${({ variant, theme }) => (variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '')};
    }
  }
`;
exports.FormGroup = FormGroup;
FormGroup.defaultProps = {
    mb: 'lg',
};
exports.default = FormGroup;
