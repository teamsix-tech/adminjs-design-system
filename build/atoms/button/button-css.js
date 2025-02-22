"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonCSS = void 0;
const styled_system_1 = require("styled-system");
const styled_components_1 = require("styled-components");
const utils_1 = require("../../utils");
const variantShared = {
    color: 'white',
    'border-color': 'transparent',
    [`& .${utils_1.cssClass('Icon')} svg`]: {
        fill: 'white',
    },
    '&:disabled': {
        bg: 'grey40',
    },
};
const buttonVariants = styled_system_1.variant({
    variants: {
        primary: Object.assign({ bg: 'primary100', '&:hover': {
                bg: 'hoverBg',
            }, className: utils_1.cssClass(['Button', 'Button_Primary']) }, variantShared),
        danger: Object.assign({ bg: 'error', '&:hover': {
                bg: 'errorDark',
                borderColor: 'transparent',
            }, className: utils_1.cssClass(['Button', 'Button_Danger']) }, variantShared),
        success: Object.assign({ bg: 'success', '&:hover': {
                bg: 'successDark',
                borderColor: 'transparent',
            }, className: utils_1.cssClass(['Button', 'Button_Success']) }, variantShared),
        info: Object.assign({ bg: 'info', '&:hover': {
                bg: 'infoDark',
                borderColor: 'transparent',
            }, className: utils_1.cssClass(['Button', 'Button_Info']) }, variantShared),
        secondary: Object.assign({ bg: 'accent', className: utils_1.cssClass(['Button', 'Button_Secondary']) }, variantShared),
        light: {
            bg: 'white',
            className: utils_1.cssClass(['Button', 'Button_Grey']),
            color: 'grey80',
            borderColor: 'grey40',
            [`& .${utils_1.cssClass('Icon')} svg`]: {
                fill: 'grey80',
            },
            '&:hover': {
                borderColor: 'grey60',
                bg: 'grey60',
            },
        },
        text: {
            bg: 'transparent',
            borderColor: 'transparent',
            '&:disabled': {
                'border-color': 'transparent',
            },
            '&:hover': {
                background: 'transparent',
                color: 'hoverBg',
                borderColor: 'transparent',
                textDecoration: 'underline',
            },
            '&:focus': {
                background: 'transparent',
                borderColor: 'transparent',
            },
            '& svg': {
                fill: 'primary100',
            },
            [`&:hover .${utils_1.cssClass('Icon')} svg`]: {
                fill: 'hoverBg',
            },
            className: utils_1.cssClass(['Button', 'Button_Text']),
        },
    },
});
const sizeVariants = styled_system_1.variant({
    prop: 'size',
    variants: {
        sm: {
            fontSize: 'sm',
            py: 'xs',
            lineHeight: 'default',
            px: 'lg',
            [`& .${utils_1.cssClass('Icon')}`]: {
                marginTop: '-1px',
                marginBottom: '-1px',
            },
        },
        // md alias default
        md: {},
        default: {},
        lg: {
            py: 'default',
            px: 'x3',
            lineHeight: 'lg',
        },
        icon: {
            py: 'default',
            px: 'default',
            lineHeight: 'sm',
            minWidth: '34px',
            height: '34px',
            [`& .${utils_1.cssClass('Icon')} svg`]: {
                padding: 0,
                margin: 0,
            },
        },
    },
});
const setPointer = (props) => {
    if (props.href || props.onClick) {
        return 'cursor: pointer';
    }
    if (props.as === 'a' && !props.href && !props.onClick) {
        return 'cursor: auto';
    }
    return '';
};
/**
 * Button CSS Styles which can be reused in another button-like component with styled-components
 *
 * Usage:
 * ```
 * import { ButtonCSS } from '@adminjs/design-system'
 * import { Link } from 'react-router-dom'
 *
 * const MyStyledLink = styled(Link)`
 *   ${ButtonCSS}
 * `
 * ```
 * @memberof Button
 * @alias ButtonCSS
 */
exports.ButtonCSS = styled_components_1.css `
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  display: inline-block;
  font-family: ${({ theme }) => theme.font};
  line-height: ${utils_1.themeGet('lineHeights', 'lg')};
  vertical-align: middle;

  border: 1px solid ${utils_1.themeGet('colors', 'primary100')};
  color: ${utils_1.themeGet('colors', 'primary100')};
  
  ${(props) => setPointer(props)};
  text-decoration: none;
  padding: ${utils_1.themeGet('space', 'sm')} ${utils_1.themeGet('space', 'xxl')};
  box-sizing: border-box;

  & > .${utils_1.cssClass('Icon')} {
    vertical-align: middle;
  }

  & > .${utils_1.cssClass('Icon')} svg {
    margin: 0 ${utils_1.themeGet('space', 'md')} 0 0;
  }

  & .${utils_1.cssClass('Icon')} svg {
    fill: ${utils_1.themeGet('colors', 'primary100')};
  }
  &:hover {
    color: ${utils_1.themeGet('colors', 'white')};
    background: ${utils_1.themeGet('colors', 'hoverBg')};
    border-color: ${utils_1.themeGet('colors', 'hoverBg')};
    & .${utils_1.cssClass('Icon')} svg {
      fill: ${utils_1.themeGet('colors', 'white')};
    }
  }
  &:focus {
    border-color: ${utils_1.themeGet('colors', 'accent')};
    ${({ theme }) => `box-shadow: ${utils_1.focusShadowStyle(theme)}`};
  }

  &:disabled {
    color: ${utils_1.themeGet('colors', 'grey60')};
    border-color: ${utils_1.themeGet('colors', 'grey80')};
    background: ${utils_1.themeGet('colors', 'white')};
    cursor: default;
    & .${utils_1.cssClass('Icon')} svg {
      fill: ${utils_1.themeGet('colors', 'grey60')};
    }
  }

  ${({ rounded }) => (rounded ? 'border-radius: 9999px' : '')};

  ${styled_system_1.color};
  ${styled_system_1.space};
  ${styled_system_1.typography};
  ${buttonVariants};
  ${sizeVariants};
`;
exports.default = exports.ButtonCSS;
