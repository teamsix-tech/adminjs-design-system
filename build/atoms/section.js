"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
/* eslint-disable import/prefer-default-export */
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = require("./box/box");
const css_class_1 = require("../utils/css-class");
const utils_1 = require("../utils");
/**
 * @classdesc
 *
 * <img src="components/section.png" />
 *
 * Marks group of fields as a section. Has the same props as [Box]{@link BoxProps}
 *
 * ### Usage
 *
 * ```javascript
 * import { Section } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-section--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Section>
 *     <Text>Some text within a section</Text>
 *     <Section>
 *       <Text>Section can be nested</Text>
 *     </Section>
 *   </Section>
 * )
 * @section design-system
 */
const Section = styled_components_1.default(box_1.Box) `
  border: 1px dotted ${utils_1.themeGet('colors', 'primary20')};
  padding: ${utils_1.themeGet('space', 'xl')};
  border-left: ${utils_1.themeGet('space', 'md')} solid ${utils_1.themeGet('colors', 'primary20')};
  padding-left: ${utils_1.themeGet('space', 'xl')};
`;
exports.Section = Section;
Section.defaultProps = {
    className: css_class_1.cssClass('Section'),
};
exports.default = Section;
