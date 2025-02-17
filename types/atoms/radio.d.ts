import React from 'react';
export declare type RadioProps = React.HTMLProps<HTMLInputElement>;
/**
 * @typedef {object} RadioProps
 * @alias RadioProps
 * @memberof Radio
 * @property {string} [...] All props default to _radio_ html input like `onChange`,
 *                          `checked` etc.
 */
/**
 /**
 * @classdesc
 *
 * <img src="components/radio.png" />
 *
 * HTML Radio
 *
 * ### Usage
 *
 * ```javascript
 * import { Radio, RadioProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see RadioProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-radio--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <Radio id="radio1"/>
 *      <Label inline htmlFor="radio1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */
declare const Radio: React.FC<RadioProps>;
export { Radio };
export default Radio;
