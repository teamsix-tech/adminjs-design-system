import React from 'react';
/**
 * @memberof DropZoneItem
 * @alias DropZoneItemProps
 */
export declare type DropZoneItemProps = {
    /**
     * Actual file buffer
     */
    file?: File;
    /**
     * Handler function triggered after clicking remove
     */
    onRemove?: () => void;
    /**
     * Preview image. If `file` is given and it is a image then `src` will be
     * overridden by this image.
     */
    src?: string;
    /**
     * filename. If 'file' is given it overrides what was given as a `filename`
     */
    filename?: string;
};
/**
 * @classdesc
 *
 * <img src="components/drop-zone-item.png" />
 *
 * Single uploaded file. Usually it is used within {@link DropZone}, but it can also be
 * reused anywhere
 *
 * ### Usage
 *
 * ```javascript
 * import { DropZoneItem, DropZoneItemProps } from '@adminjs/design-system'
 * ```
 *
 * @see DropZoneItem
 * @hideconstructor
 * @see DropZoneItemProps
 * @example
 * return (
 *  <DropZoneItem
 *    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2019%2F05%2F17%2F724262019%2Fgrumpy-cat-dies-her-spirit-will-live-on-family-says&psig=AOvVaw2ZKtTEZr8N43fx9x-lTITa&ust=1581083274368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKidqqyIvecCFQAAAAAdAAAAABAD"
 *    filename="shut-up-it-works.png"
 *  />
 * )
 * @component
 * @subcategory Molecules
 * @section design-system
 */
declare const DropZoneItem: React.FC<DropZoneItemProps>;
export { DropZoneItem };
export default DropZoneItem;
