"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
/* eslint-disable no-shadow */
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const drawer_footer_1 = __importDefault(require("./drawer-footer"));
const css_class_1 = require("../../utils/css-class");
const constants_1 = require("../../constants");
const variants = styled_system_1.variant({
    variants: {
        filter: {
            bg: 'filterBg',
            width: '400px',
            color: 'white',
            className: css_class_1.cssClass(['Drawer', 'Drawer_Filter']),
        },
    },
});
/**
 * @classdesc
 *
 * <img src="components/drawer.png" />
 *
 * Drawer component renders a huge side area where {@link BaseActionComponent} renders
 * all actions where {@link Action.showInDrawer} is set to true.
 *
 * You probably don't want to use it directly in your actions, but if you decide to set
 * `showInDrawer` to true you will probably want to use `DrawerContent` or `DrawerFooter`
 * components.
 *
 * All these components: Drawer, DrawerContent and Drawer Footer extends {@link SpaceProps}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Drawer, DrawerProps, DrawerContent, DrawerFooter } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see DrawerProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-drawer--default Storybook}
 * @example
 * return (
 * <Box height="500px">
 *   <Drawer>
 *     <DrawerContent>
 *       <Header.H3>
 *         <Button size="icon" rounded mr="lg">
 *           <Icon icon="ChevronRight" />
 *         </Button>
 *         Edit
 *       </Header.H3>
 *       <Box my="x3" p={0}>
 *         <Button size="sm">
 *           <Icon icon="Information" />
 *           Info
 *         </Button>
 *         <Button size="sm" ml="lg">
 *           <Icon icon="Delete" />
 *           Delete
 *         </Button>
 *       </Box>
 *
 *     </DrawerContent>
 *     <DrawerFooter>
 *       <Button variant="primary">
 *         Save
 *       </Button>
 *     </DrawerFooter>
 *   </Drawer>
 * </Box>
 * )
 *
 * @section design-system
 */
const Drawer = styled_components_1.default.section `
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({ isHidden, width }) => (isHidden ? `-${width === null || width === void 0 ? void 0 : width.toString()}` : '0px;')};
  &.hidden {
    right: ${({ width }) => (`-${width === null || width === void 0 ? void 0 : width.toString()}`)};
  }
  box-shadow: 0 3px 6px ${({ theme }) => theme.colors.grey40};
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 500ms;
  background: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  & > ${drawer_footer_1.default} {
    border-top: 1px solid ${({ theme }) => theme.colors.primary20};
    ${({ variant, theme }) => (variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '')};    
  }
  max-width: 100%;
  
  ${styled_system_1.space};
  ${styled_system_1.color};
  ${styled_system_1.layout};
  ${variants};
`;
exports.Drawer = Drawer;
Drawer.defaultProps = {
    width: constants_1.DEFAULT_DRAWER_WIDTH,
    className: css_class_1.cssClass('Drawer'),
};
exports.default = Drawer;
