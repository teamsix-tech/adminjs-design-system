"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const css_class_1 = require("../utils/css-class");
const sizeVariants = styled_system_1.variant({
    prop: 'size',
    variants: {
        sm: {
            fontSize: 'xs',
            py: 'sm',
        },
        lg: {
            fontSize: 'default',
        },
    },
});
const variants = styled_system_1.variant({
    variants: {
        primary: {
            color: 'primary100',
            '&:hover': {
                color: 'hoverBg',
                '& svg': {
                    fill: 'hoverBg',
                },
            },
            '& svg': {
                fill: 'primary100',
            },
        },
        danger: {
            color: 'error',
            '&:hover': {
                color: 'error',
            },
            '& svg': {
                fill: 'error',
            },
        },
        success: {
            color: 'success',
            '&:hover': {
                color: 'success',
            },
            '& svg': {
                fill: 'success',
            },
        },
        info: {
            color: 'primary60',
            '&:hover': {
                color: 'hoverBg',
            },
            '& svg': {
                fill: 'primary60',
            },
        },
        secondary: {
            color: 'accent',
            '&:hover': {
                color: 'hoverBg',
            },
            '& svg': {
                fill: 'accent',
            },
        },
    },
});
/**
 * @classdesc
 *
 * <img src="components/link.png" />
 *
 * Styled form of Link element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Link, LinkProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LinkProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-link--default Storybook}
 * @hideconstructor
 * @example <caption>All color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="xl">
 *   {variants.map(variant => (
 *      <Link href="#" variant={variant} mr="xl">{variant}</Link>
 *   ))}
 * </Box>
 * )
 * @example <caption>With icons</caption>
 * return (
 * <Box py="xl">
 *   <Link href="#" mr="xl">
 *     <Icon icon="Add" />
 *     With an icon
 *   </Link>
 * </Box>
 * )
 * @section design-system
 */
const Link = styled_components_1.default.a `
  font-family: ${({ theme }) => theme.font};
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  & svg {
    padding-right: ${({ theme }) => theme.space.default};
    vertical-align: text-top;
  }
  ${({ uppercase }) => (uppercase ? 'text-transform: uppercase;' : '')}
  ${styled_system_1.color};
  ${styled_system_1.space};
  ${sizeVariants};
  ${variants};
`;
exports.Link = Link;
Link.defaultProps = {
    color: 'grey60',
    className: css_class_1.cssClass('Link'),
};
exports.default = Link;
