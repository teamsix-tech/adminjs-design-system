import { ButtonProps } from './button-props';
/**
 * Button CSS Styles which can be reused in another button-like component with styled-components
 *
 * Usage:
 * ```
 * import { ButtonCSS } from '@adminjs/design-system'
 * import { Link } from 'react-router-dom'
 *
 * const MyStyledLink = styled(Link)`
 *   ${ButtonCSS}
 * `
 * ```
 * @memberof Button
 * @alias ButtonCSS
 */
export declare const ButtonCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ButtonProps, import("styled-components").DefaultTheme>>;
export default ButtonCSS;
