import React from 'react';
import { DisplaySizeUnit } from '../../utils/human-file-size';
/**
 * @memberof DropZone
 * @alias FileSizeUnit
 */
declare type FileSizeUnit = DisplaySizeUnit;
/**
 * @returns {void}
 * @memberof DropZone
 * @alias OnDropDownChange
 */
export declare type OnDropZoneChange = (files: Array<File>) => void;
/**
 * @memberof DropZone
 * @alias DropZoneProps
 */
export declare type DropZoneProps = {
    /**
     * if drop zone should handle multiple uploads
     */
    multiple?: boolean;
    /**
     * Initial files collection (in case you want to hold files state)
     */
    files?: Array<File>;
    /**
     * Callback performed when the file is dropped/selected
     */
    onChange?: OnDropZoneChange;
    /**
     * Validate options
     */
    validate?: {
        /**
         * Maximum size of the uploaded file in bytes. If not defined - all files are allowed.
         */
        maxSize?: number;
        /**
         * Available mime types. When not defined - all mime types are allowed.
         */
        mimeTypes?: Array<string>;
    };
    /**
     * Upload limit display e.g.: 'KB' (upper case)
     */
    uploadLimitIn?: FileSizeUnit;
};
/**
 * @classdesc
 *
 * <img src="components/drop-zone.png" />
 *
 * DropZone which can be used for uploading files.
 *
 * ### usage
 *
 * ```javascript
 * import { DropZone, DropZoneProps } from '@adminjs/design-system'
 * ```
 *
 * how to use it in your custom component.tsx (TypesScript):
 * ```
 * import React, { useState } from 'react'
 * import { DropZone, Label, BasePropertyProps } from '@adminjs/design-system'
 * import { unflatten } from 'flat'
 *
 * const UploadPhoto: React.FC<BasePropertyProps> = (props) => {
 *   const { property, record, onChange } = props
 *
 *   const onUpload = (files: FileList) => {
 *     const newRecord = {...record}
 *     const file = files.length && files[0]
 *
 *     onChange({
 *       ...newRecord,
 *       params: {
 *         ...newRecord.params,
 *         [property.name]: file,
 *       }
 *     })
 *     event.preventDefault()
 *   }
 *
 *   return (
 *     <Box>
 *       <Label>{property.label}</Label>
 *       <DropZone onChange={onUpload} />
 *     </Box>
 *   )
 * }
 * ```
 * @hideconstructor
 * @component
 * @subcategory Molecules
 * @see FileSizeUnit
 * @see OnDropDownChange
 * @see DropZoneProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropzone--default Storybook}
 * @example <caption>Single file with validation</caption>
 * const maxSize = 1024 * 100
 * const mimeTypes = ['application/pdf']
 * const onUpload = (files) => { alert(files,length ? files[0].name : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     onChange={onUpload}
 *     validate= { { maxSize, mimeTypes } }
 *   />
 * </Box>
 * )
 *
 * @example <caption>Multi file of photos</caption>
 * const mimeTypes = ['image/png']
 * const onUpload = (files) => { alert(files.length ? files.length : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     multiple
 *     onChange={onUpload}
 *     validate= { { mimeTypes } }
 *   />
 * </Box>
 * )
 * @section design-system
 */
declare const DropZone: React.FC<DropZoneProps>;
export { DropZone };
export default DropZone;
