import { DefaultTheme } from 'styled-components';
import { SpaceProps, TypographyProps } from 'styled-system';
import { ColorProps } from '../utils/color-props';
import { VariantType } from '../theme';
export declare type LabelVariantType = VariantType;
/**
 * Prop Types of a Label component.
 * Apart from those explicitly specified below it extends all {@link ColorProps},
 * {@link SpaceProps} and {@link TypographyProps}
 *
 * @memberof Label
 * @alias LabelProps
 * @property {string} [...] All props default to _label_ html component like `htmlFor`,
 *                          `id` etc.
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export declare type LabelProps = ColorProps & SpaceProps & TypographyProps & {
    /** If label represents required field - appends star (*) */
    required?: boolean;
    /** If label should be in uppercase version */
    uppercase?: boolean;
    /** By default labels are displayed as a block. You can override this by setting `inline` */
    inline?: boolean;
    /** If label represents disabled field (dimmed version) */
    disabled?: boolean;
    /** Color variant */
    variant?: LabelVariantType;
    /** Label size */
    size?: 'default' | 'lg';
};
/**
 * @classdesc
 *
 * <img src="components/label.png" />
 *
 * Styled form of **label** element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Label, LabelProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LabelProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-label--default Storybook}
 * @hideconstructor
 * @example <caption>2 Different versions</caption>
 * return (
 * <Box p="xl">
 *   <Text>
 *     <Label uppercase>Some uppercase label</Label>
 *   </Text>
 *   <Text mt="default">
 *     <Label required>Label for required field</Label>
 *   </Text>
 * </Box>
 * )
 * @section design-system
 */
declare const Label: import("styled-components").StyledComponent<"label", DefaultTheme, LabelProps, never>;
export { Label };
export default Label;
