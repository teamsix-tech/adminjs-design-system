"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBox = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const __1 = require("..");
const css_class_1 = require("../utils/css-class");
const StyledInfoBox = styled_components_1.default(__1.Box) `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
/**
 * @classdesc
 *
 * <img src="components/info-box.png" />
 *
 * Used for all type of information like:
 *
 * > you don't have x - please add first one"
 *
 * in the system.
 *
 * ### Usage
 *
 * ```javascript
 * import { InfoBox, InfoBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-infobox--default Storybook}
 * @see InfoBoxProps
 * @example
 * return (
 * <InfoBox title="There are no cars in the system">
 *   <Text>Currently there are no cars in the system</Text>
 *   <Text>To create first click</Text>
 *   <Button mt="lg"><Icon icon="Add" />Create</Button>
 * </InfoBox>
 * )
 * @section design-system
 */
const InfoBox = (props) => {
    const { children, title, testId } = props;
    return (react_1.default.createElement(StyledInfoBox, { "data-testid": testId, variant: "white", className: css_class_1.cssClass('InfoBox') },
        react_1.default.createElement(__1.Box, { width: 1 / 2 },
            react_1.default.createElement(__1.H4, { mb: "lg" }, title),
            children)));
};
exports.InfoBox = InfoBox;
exports.default = InfoBox;
