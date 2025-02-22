"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Header = exports.default = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const button_1 = require("../button");
const badge_1 = require("../badge/badge");
const css_class_1 = require("../../utils/css-class");
const theme_get_1 = __importDefault(require("../../utils/theme-get"));
const Base = styled_components_1.default.h3 `
  font-family: ${theme_get_1.default('font')};
  vertical-align: middle;
  padding: 0;
  * {
    vertical-align: middle;
  }
  & ${button_1.Button}, a {
    vertical-align: bottom;
  }
  * > &:first-child {
    margin-top: ${theme_get_1.default('space', 'sm')};
  }
  ${badge_1.Badge} {
    vertical-align: middle;
  }

  ${styled_system_1.typography};
  ${styled_system_1.space};
`;
Base.defaultProps = {
    fontWeight: 'light',
    fontSize: 'h3',
    lineHeight: 'xl',
    className: css_class_1.cssClass(['Header', 'H3']),
    marginTop: 'xxl',
    marginBottom: 'xl',
};
const H1 = styled_components_1.default((props) => react_1.default.createElement(Base, Object.assign({ as: "h1" }, props))) ``;
exports.H1 = H1;
H1.defaultProps = {
    fontSize: 'h1',
    lineHeight: 'xxl',
    className: css_class_1.cssClass(['Header', 'H1']),
    marginTop: 'x4',
    marginBottom: 'x3',
};
const H2 = styled_components_1.default((props) => react_1.default.createElement(Base, Object.assign({ as: "h2" }, props))) `
  & ${button_1.Button}, a {
    margin-bottom: 4px;
  }
`;
exports.H2 = H2;
H2.defaultProps = {
    fontSize: 'h2',
    lineHeight: 'xxl',
    className: css_class_1.cssClass(['Header', 'H2']),
    marginTop: 'x3',
    marginBottom: 'xxl',
};
const H3 = Base;
exports.H3 = H3;
const H4 = styled_components_1.default((props) => react_1.default.createElement(Base, Object.assign({ as: "h4" }, props))) ``;
exports.H4 = H4;
H4.defaultProps = {
    fontSize: 'h4',
    lineHeight: 'xl',
    className: css_class_1.cssClass(['Header', 'H4']),
    marginTop: 'xxl',
    marginBottom: 'xl',
};
const H5 = styled_components_1.default((props) => react_1.default.createElement(Base, Object.assign({ as: "h5" }, props))) ``;
exports.H5 = H5;
H5.defaultProps = {
    fontSize: 'xl',
    lineHeight: 'lg',
    className: css_class_1.cssClass(['Header', 'H5']),
    marginTop: 'xl',
    marginBottom: 'default',
    fontWeight: 'normal',
};
const H6 = styled_components_1.default((props) => react_1.default.createElement(Base, Object.assign({ as: "h6" }, props))) ``;
exports.H6 = H6;
H6.defaultProps = {
    fontSize: 'lg',
    lineHeight: 'lg',
    className: css_class_1.cssClass(['Header', 'H6']),
    marginTop: 'lg',
    marginBottom: 'default',
    fontWeight: 'normal',
};
/**
 * @load ./header.doc.md
 * @component
 * @subcategory Atoms
 * @see HeaderProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-header--default Storybook}
 * @hideconstructor
 * @section design-system
 */
const Header = H3;
exports.default = Header;
exports.Header = Header;
Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
Header.H5 = H5;
Header.H6 = H6;
