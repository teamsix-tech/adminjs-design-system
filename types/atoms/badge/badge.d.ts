import { SpaceProps, TypographyProps } from 'styled-system';
import { VariantType } from '../../theme';
import { ColorProps } from '../../utils/color-props';
/**
 * @load ./badge-props.doc.md
 * @memberof Badge
 * @alias BadgeProps
 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
 *                          and {@link TypographyProps}
 */
export declare type BadgeProps = SpaceProps & TypographyProps & ColorProps & {
    /**
     * Color variant
     */
    variant?: VariantType;
    /**
     * Outline version
     */
    outline?: boolean;
    /**
     * Size variant
     */
    size?: 'sm' | 'lg' | 'default';
};
/**
 * @load ./badge.doc.md
 * @see BadgeProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-badge--default StoryBook}
 * @component
 * @hideconstructor
 * @section design-system
 * @subcategory Atoms
 */
declare const Badge: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, BadgeProps, never>;
export { Badge };
export default Badge;
