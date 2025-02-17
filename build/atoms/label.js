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
exports.Label = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const styled_system_1 = require("styled-system");
const css_class_1 = require("../utils/css-class");
const theme_get_1 = __importDefault(require("../utils/theme-get"));
const labelVariants = styled_system_1.variant({
    variants: {
        primary: {
            color: 'primary100',
            [`& .${css_class_1.cssClass('Icon')} svg`]: {
                fill: 'primary100',
            },
        },
        danger: {
            color: 'error',
            [`& .${css_class_1.cssClass('Icon')} svg`]: {
                fill: 'error',
            },
        },
        success: {
            color: 'success',
            [`& .${css_class_1.cssClass('Icon')} svg`]: {
                fill: 'success',
            },
        },
        info: {
            color: 'info',
            [`& .${css_class_1.cssClass('Icon')} svg`]: {
                fill: 'info',
            },
        },
        secondary: {
            color: 'accent',
            [`& .${css_class_1.cssClass('Icon')} svg`]: {
                fill: 'accent',
            },
        },
        light: {
            color: 'grey60',
            mb: 'sm',
            fontWeight: 'light',
            [`& .${css_class_1.cssClass('Icon')} svg`]: {
                fill: 'grey60',
            },
        },
        default: {},
    },
});
const setDisabled = ({ disabled, theme }) => (disabled
    ? styled_components_1.css `
    color: ${theme.colors.grey40};
    & .${css_class_1.cssClass('Icon')} svg {
      fill: ${theme.colors.grey40};
    }
  `
    : styled_components_1.css ``);
/**
 * @classdesc
 *
 * <img src="components/label.png" />
 *
 * Styled form of **label** element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Label, LabelProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LabelProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-label--default Storybook}
 * @hideconstructor
 * @example <caption>2 Different versions</caption>
 * return (
 * <Box p="xl">
 *   <Text>
 *     <Label uppercase>Some uppercase label</Label>
 *   </Text>
 *   <Text mt="default">
 *     <Label required>Label for required field</Label>
 *   </Text>
 * </Box>
 * )
 * @section design-system
 */
const Label = styled_components_1.default.label `
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  font-family: ${theme_get_1.default('font')};
  font-size: ${(props) => theme_get_1.default('fontSizes', props.size === 'lg' ? 'md' : 'sm')(props)};
  line-height: ${theme_get_1.default('lineHeights', 'default')};
  margin-bottom: ${({ theme, inline }) => (inline ? '0' : theme.space.default)};

  &:before {
    content: "${({ required }) => (required ? '*' : '')}";
    color: ${theme_get_1.default('colors', 'primary100')};
    margin-right: ${theme_get_1.default('space', 'sm')};
    display: ${({ required }) => (required ? 'block-inline' : 'none')};
  }

  & > .${css_class_1.cssClass('Icon')}:first-child {
    margin-right: ${theme_get_1.default('space', 'md')};
  }

  ${({ uppercase }) => (uppercase ? 'text-transform: uppercase;' : '')}
  ${styled_system_1.color};
  ${styled_system_1.typography};
  ${styled_system_1.space};
  ${labelVariants};
  ${(props) => setDisabled(props)};
`;
exports.Label = Label;
Label.defaultProps = {
    className: css_class_1.cssClass('Label'),
};
exports.default = Label;
