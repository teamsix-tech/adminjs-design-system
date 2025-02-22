import { SpaceProps } from 'styled-system';
import { ColorProps } from '../utils/color-props';
/**
 * Prop Types of a Link component.
 * Apart from those explicitly specified below it extends all {@link ColorProps},
 * and {@link SpaceProps}
 *
 * @memberof Link
 * @alias LinkProps
 * @property {string} [...] All props default to _a_ html component like `href`,
 *                          `onClick` etc.
 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
 */
export declare type LinkProps = ColorProps & SpaceProps & {
    /** Defines if link should be uppercase */
    uppercase?: boolean;
    /** Color variant */
    variant?: 'primary' | 'danger' | 'success' | 'info' | 'secondary';
    /** Size variant */
    size?: 'sm' | 'lg';
};
/**
 * @classdesc
 *
 * <img src="components/link.png" />
 *
 * Styled form of Link element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Link, LinkProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LinkProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-link--default Storybook}
 * @hideconstructor
 * @example <caption>All color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="xl">
 *   {variants.map(variant => (
 *      <Link href="#" variant={variant} mr="xl">{variant}</Link>
 *   ))}
 * </Box>
 * )
 * @example <caption>With icons</caption>
 * return (
 * <Box py="xl">
 *   <Link href="#" mr="xl">
 *     <Icon icon="Add" />
 *     With an icon
 *   </Link>
 * </Box>
 * )
 * @section design-system
 */
declare const Link: import("styled-components").StyledComponent<"a", import("styled-components").DefaultTheme, LinkProps, never>;
export { Link };
export default Link;
