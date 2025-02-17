import React from 'react';
import { BoxProps } from '../..';
export declare const DEFAULT_STICK = "left";
/**
 * Available values for {@link DropDown}.stick prop
 * @memberof DropDown
 */
export declare type DropDownStickProp = 'left' | 'right';
/**
 * Props passed to DropDown element.
 * @property {string} [...] Other props from {@link BoxProps}
 * @memberof DropDown
 * @extends BoxProps
 */
export declare type DropDownProps = {
    /** Indicates if menu should stick to left or right */
    stick?: DropDownStickProp;
} & BoxProps;
/**
 * @load ./drop-down.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropdown--default Storybook}
 * @component
 * @subcategory Molecules
 * @section design-system
 */
declare const DropDown: React.FC<DropDownProps>;
export { DropDown };
export default DropDown;
