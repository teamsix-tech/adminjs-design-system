"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserNav = exports.default = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../..");
const current_user_nav_styled_1 = __importDefault(require("./current-user-nav-styled"));
/**
 * @load ./current-user-nav.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see CurrentUserNavProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-current-user-nav--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
const CurrentUserNav = (props) => {
    const { name, title, avatarUrl, dropActions, lineActions } = props;
    return (react_1.default.createElement(current_user_nav_styled_1.default, null,
        lineActions && lineActions.length && (react_1.default.createElement(__1.Box, { flex: true, flexDirection: "row", alignItems: "center" }, lineActions.map((action) => (react_1.default.createElement(__1.Button, { size: "icon", variant: "text", title: action.label, key: action.label, href: action.href, as: "a", className: "line-action", onClick: action.onClick }, action.icon && (react_1.default.createElement(__1.Icon, { icon: action.icon }))))))),
        react_1.default.createElement(__1.DropDown, { stick: "right", display: "flex" },
            react_1.default.createElement(__1.DropDownTrigger, null,
                react_1.default.createElement(__1.Box, { flex: true, flexDirection: "row", px: "xl", alignItems: "center", height: "navbarHeight" },
                    react_1.default.createElement(__1.Box, null,
                        react_1.default.createElement(__1.Title, null, name),
                        title && (react_1.default.createElement(__1.SmallText, null, title))),
                    avatarUrl && (react_1.default.createElement("img", { src: avatarUrl, alt: name })),
                    dropActions && dropActions.length && (react_1.default.createElement(__1.Icon, { icon: "OverflowMenuVertical", size: 16, ml: "md" })))),
            dropActions && dropActions.length && (react_1.default.createElement(__1.DropDownMenu, { minWidth: "100%" }, dropActions.map((action) => (react_1.default.createElement(__1.DropDownItem, { key: action.label, as: "a", onClick: action.onClick, href: action.href },
                action.icon && (react_1.default.createElement(__1.Icon, { icon: action.icon })),
                action.label))))))));
};
exports.default = CurrentUserNav;
exports.CurrentUserNav = CurrentUserNav;
