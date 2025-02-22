import React from 'react';
import { SpaceProps } from 'styled-system';
/**
 * Prop Types of a MessageBox component.
 * Apart from those defined below it extends all {@link SpaceProps}
 *
 * @memberof MessageBox
 * @alias MessageBoxProps
 */
declare type MessageBoxProps = {
    /** Triggered when user clicks close button. If not given close button won't be seen */
    onCloseClick?: () => void;
    /** Title content of a message */
    message?: string;
    /** Variant */
    variant?: 'danger' | 'info' | 'success';
    /** Icon which will be seen in the title */
    icon?: string;
    /** Size variant */
    size?: 'sm';
    /** Optional html style property */
    style?: Record<string, string>;
    /** Optional children, when given component will be expanded */
    children?: React.ReactNode;
};
declare type Props = SpaceProps & MessageBoxProps;
export { Props as MessageBoxProps };
/**
 * @classdesc
 *
 * <img src="components/message-box.png" />
 *
 * Component responsible for rendering standard danger/info/success
 * messages.
 *
 * It has 2 size versions: default and small. Also it can either contain or
 * don't contain children, which causes different look.
 *
 * ### Usage
 *
 * ```javascript
 * import { MessageBox, MessageBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see MessageBoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-messagebox--default Storybook}
 * @example <caption>Different variants</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')} />
 *  </Box>
 * )
 * @example <caption>Different variants with children</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @example <caption>Small with an icon and inside text</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox
 *     size="sm"
 *     message="Info message"
 *     mt="default"
 *     variant="info"
 *     icon="AddComment"
 *     onCloseClick={() => alert('close clicked')}
 *   >
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @section design-system
 */
declare const MessageBox: React.FC<Props>;
export { MessageBox };
export default MessageBox;
