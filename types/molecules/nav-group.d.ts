import React from 'react';
/**
 * @memberof NavGroup
 * @alias NavGroupProps
 */
export declare type NavGroupProps = {
    /** Title of the navigation group */
    title: string;
    /** Optional icon */
    icon?: string;
};
/**
 * @classdesc
 *
 * > This component is deprecated in favour of {@link NavigationElement} and
 * {@link Navigation} components
 *
 * <img src="components/navgroup.png" />
 *
 * NavGroup is used in a navigation sidebar to group similar elements
 *
 * ### Usage
 *
 * ```javascript
 * import { NavGroup, NavGroupProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see NavGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-navgroup--default Storybook}
 * @example
 * return (
 *   <Box py="xl">
 *     <NavGroup title="Some group title" icon="Add">
 *       <Text>Some group element</Text>
 *     </NavGroup>
 *   </Box>
 * )
 * @section design-system
 * @deprecated in favour of {@link Navigation} and {@link NavigationElement} components
 */
declare const NavGroup: React.FC<NavGroupProps>;
export { NavGroup };
export default NavGroup;
