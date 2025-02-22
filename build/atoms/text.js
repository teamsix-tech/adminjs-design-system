"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const content_styles_1 = __importDefault(require("../utils/content-styles"));
const css_class_1 = require("../utils/css-class");
const variants = styled_system_1.variant({
    variants: {
        xs: {
            fontSize: 'xs',
        },
        sm: {
            fontSize: 'sm',
        },
        lg: {
            fontSize: 'lg',
        },
    },
});
/**
 * @classdesc
 *
 * <img src="components/text.png" />
 *
 * Use the Text component to control font size, weight, alignment, and color.
 * By default it is rendered as a `div` but you can change this to other (like `span`)
 * by using `as` prop,
 *
 * ### Usage
 *
 * ```javascript
 * import { Text, TextProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see TextProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-text--default Storybook}
 * @hideconstructor
 * @example <caption>Lorem ipsum</caption>
 * return (
 * <Box>
 *   <Text>
 *    In publishing and graphic design,
 *    Lorem ipsum is a <b>placeholder</b> text commonly used to demonstrate the
 *    visual form of a document or a typeface without relying on meaningful
 *    content.
 *   </Text>
 *   <Text mt="default" variant="sm">This text was from Wikipedia</Text>
 * </Box>
 * )
 * @section design-system
 */
const Text = styled_components_1.default.div `
  ${content_styles_1.default};
  ${styled_system_1.typography};
  ${styled_system_1.space};
  ${styled_system_1.layout};
  ${styled_system_1.color};
  ${variants};
`;
exports.Text = Text;
Text.defaultProps = {
    className: css_class_1.cssClass('Text'),
};
exports.default = Text;
