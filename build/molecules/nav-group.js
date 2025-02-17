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
exports.NavGroup = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const icon_1 = require("../atoms/icon");
const box_1 = require("../atoms/box/box");
const text_1 = require("../atoms/text");
const css_class_1 = require("../utils/css-class");
const theme_get_1 = __importDefault(require("../utils/theme-get"));
const NavGroupTitle = styled_components_1.default(text_1.Text) `
  padding: 11px 20px;
  margin: 0;
  color: ${theme_get_1.default('colors', 'grey100')};
  border-radius: 9999px;
  display: flex;
  cursor: pointer;

  & > ${text_1.Text} {
    display: block;
    flex-grow: 1;
    line-height: ${theme_get_1.default('lineHeights', 'default')};
    margin-bottom: 0;
  }

  & + ${box_1.Box} {
    padding-left: ${theme_get_1.default('space', 'xxl', '12px')};
  }

  & > .${css_class_1.cssClass('Icon')} svg {
    vertical-align: middle;
    padding-bottom: 2px;
    flex-shrink: 0;
  }

  & > .${css_class_1.cssClass('Icon')}:first-child {
    padding-right: ${theme_get_1.default('space', 'md')};
  }

  & > .${css_class_1.cssClass('Icon')}:last-child {
    padding-left: ${theme_get_1.default('space', 'sm')};
  }
`;
NavGroupTitle.defaultProps = {
    className: css_class_1.cssClass('NavGroupTitle'),
};
/**
 * @classdesc
 *
 * > This component is deprecated in favour of {@link NavigationElement} and
 * {@link Navigation} components
 *
 * <img src="components/navgroup.png" />
 *
 * NavGroup is used in a navigation sidebar to group similar elements
 *
 * ### Usage
 *
 * ```javascript
 * import { NavGroup, NavGroupProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see NavGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-navgroup--default Storybook}
 * @example
 * return (
 *   <Box py="xl">
 *     <NavGroup title="Some group title" icon="Add">
 *       <Text>Some group element</Text>
 *     </NavGroup>
 *   </Box>
 * )
 * @section design-system
 * @deprecated in favour of {@link Navigation} and {@link NavigationElement} components
 */
const NavGroup = (props) => {
    const { title, icon, children } = props;
    const [isItOpen, toggleOpen] = react_1.useState(true);
    const chevron = isItOpen ? 'ChevronUp' : 'ChevronDown';
    return (react_1.default.createElement(box_1.Box, { className: css_class_1.cssClass('NavGroup') },
        react_1.default.createElement(NavGroupTitle, { onClick: () => toggleOpen(!isItOpen), bg: isItOpen ? 'grey20' : 'transparent' },
            react_1.default.createElement(icon_1.Icon, { icon: icon || 'Settings' }),
            react_1.default.createElement(text_1.Text, null, title),
            react_1.default.createElement(icon_1.Icon, { icon: chevron })),
        isItOpen ? (react_1.default.createElement(box_1.Box, { pb: "xl", pt: "sm" }, children)) : ''));
};
exports.NavGroup = NavGroup;
exports.default = NavGroup;
