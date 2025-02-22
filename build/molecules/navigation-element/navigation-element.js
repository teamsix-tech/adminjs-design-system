"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.NavigationElement = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../..");
const navigation_element_styled_1 = require("./navigation-element-styled");
// The longest part of the label which makes it no-wrap: ellipsis
// example: `MongooseWithLongNameAnd with space` should be truncated because 15 lines doesn't fit
// the width of the navbar. But "Postgres with long name and spaces" shouldn't be truncated because
// its "parts" doesn't exceed 15 chars each.
const PART_LENGTH_TO_ELLIPSIS = 15;
/**
 * @load ./navigation-element.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see NavigationElementProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-navigation-element--default Storybook}
 * @section design-system
 * @new In version 3.3
 */
const NavigationElement = (props) => {
    const { isOpen, icon, onClick, label, isSelected, href } = props;
    const expandable = typeof isOpen !== 'undefined';
    const chevron = isOpen ? 'ChevronUp' : 'ChevronDown';
    const hasLongName = label.split(' ').reduce((memo, part) => (memo.length > part.length ? memo : part), '').length > PART_LENGTH_TO_ELLIPSIS;
    return (react_1.default.createElement(navigation_element_styled_1.StyledNavigationElement, { flex: true, flexDirection: "row", as: "a", isSelected: isSelected, isOpen: isOpen, href: href, onClick: (event) => (onClick ? onClick(event, props) : undefined) },
        icon && (react_1.default.createElement(__1.Box, { className: "icon-box", as: "span" },
            react_1.default.createElement(__1.Icon, { icon: icon }))),
        react_1.default.createElement(__1.Title, { style: { whiteSpace: hasLongName ? 'nowrap' : 'normal' } }, label),
        expandable && (react_1.default.createElement(__1.Box, { className: "arrow-box", as: "span" },
            react_1.default.createElement(__1.Icon, { icon: chevron })))));
};
exports.NavigationElement = NavigationElement;
exports.default = NavigationElement;
