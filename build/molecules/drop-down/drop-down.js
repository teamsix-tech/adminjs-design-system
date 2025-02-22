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
exports.DropDown = exports.DEFAULT_STICK = void 0;
/* eslint-disable default-case */
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledDropDown = styled_components_1.default.div `
  position: relative;
  display: inline-block;
`;
exports.DEFAULT_STICK = 'left';
/**
 * @load ./drop-down.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropdown--default Storybook}
 * @component
 * @subcategory Molecules
 * @section design-system
 */
const DropDown = (props) => {
    const { children, stick = exports.DEFAULT_STICK } = props, boxProps = __rest(props, ["children", "stick"]);
    const [isVisible, setIsVisible] = react_1.useState(false);
    const [initialHeight, setInitialHeight] = react_1.useState(null);
    const ref = react_1.useRef(null);
    const [menuPosition, setMenuPosition] = react_1.useState();
    react_1.useLayoutEffect(() => {
        if (ref.current && !initialHeight) {
            const { offsetHeight } = ref.current;
            setInitialHeight(offsetHeight);
            switch (stick) {
                case 'left':
                    setMenuPosition({ left: 0, top: offsetHeight });
                    break;
                case 'right':
                    setMenuPosition({ right: 0, top: offsetHeight });
            }
        }
    }, [ref.current]);
    const elements = react_1.default.Children.map(children, (child) => {
        const type = child && child.type && child.type.displayName;
        if (type === 'DropDownTrigger') {
            // getting rid of DropDownTrigger and render just what was inside
            return react_1.default.cloneElement(child.props.children);
        }
        if (type === 'DropDownMenu') {
            return react_1.default.cloneElement(child, Object.assign({ isVisible,
                stick }, menuPosition));
        }
        return child;
    });
    return (react_1.default.createElement(StyledDropDown, Object.assign({}, boxProps, { onMouseEnter: () => setIsVisible(true), onMouseLeave: () => setIsVisible(false), ref: ref }), elements));
};
exports.DropDown = DropDown;
exports.default = DropDown;
