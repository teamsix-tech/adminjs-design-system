"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropZone = void 0;
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const label_1 = require("../../atoms/label");
const box_1 = require("../../atoms/box/box");
const text_1 = require("../../atoms/text");
const message_box_1 = require("../message-box");
const drop_zone_item_1 = require("./drop-zone-item");
const human_file_size_1 = require("../../utils/human-file-size");
const validateContentType = (mimeTypes, mimeType) => {
    if (!mimeTypes || !mimeTypes.length) {
        return true;
    }
    return mimeTypes.includes(mimeType);
};
const validateSize = (maxSize, size) => {
    if (!maxSize) {
        return true;
    }
    if (!size) {
        return true;
    }
    return +maxSize >= +size;
};
const inUnit = (size, unit) => {
    if (!size) {
        return '';
    }
    return human_file_size_1.humanFileSize(size, unit);
};
const UploadInput = styled_components_1.default.input `
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  bottom: 0;
  cursor: pointer;
  width: 100%;
`;
const StyledDropZone = styled_components_1.default(box_1.Box) `
  border: 1px dashed ${({ theme }) => theme.colors.grey80};
  position: relative;
  text-align: center;

  & ${label_1.Label} {
    color: ${({ theme }) => theme.colors.grey60};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding-right: 4px;
    letter-spacing: 1px;
  }
`;
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
const DropZone = (props) => {
    const { validate, onChange, multiple, files: filesFromProps, uploadLimitIn } = props, other = __rest(props, ["validate", "onChange", "multiple", "files", "uploadLimitIn"]);
    const [, setIsDragging] = react_1.useState(false);
    const [error, setError] = react_1.useState(null);
    const [filesToUpload, setFilesToUpload] = react_1.useState(filesFromProps !== null && filesFromProps !== void 0 ? filesFromProps : []);
    react_1.useEffect(() => {
        if (filesFromProps) {
            setFilesToUpload(filesFromProps);
        }
    }, [filesFromProps]);
    const onDragEnter = () => setIsDragging(true);
    const onDragLeave = () => setIsDragging(false);
    const onDragOver = () => setIsDragging(true);
    const removeItem = react_1.useCallback((index) => {
        const newItems = [...filesToUpload];
        newItems.splice(index, 1);
        if (onChange) {
            onChange(newItems);
        }
        setFilesToUpload(newItems);
    }, [filesToUpload, setFilesToUpload, onChange]);
    const onDrop = react_1.useCallback((event) => {
        event.preventDefault();
        setIsDragging(false);
        const { files } = (event.dataTransfer || event.target);
        const validatedFiles = [];
        for (let i = 0; i < files.length; i += 1) {
            const file = files.item(i);
            if (!file) {
                return;
            }
            if (validate && !validateSize(validate.maxSize, file && file.size)) {
                setError({ message: `File: ${file.name} size is too big`, title: 'Wrong Size' });
                return;
            }
            if (validate && !validateContentType(validate.mimeTypes, file.type)) {
                setError({ message: `File: ${file.name} has unsupported type: ${file.type}`, title: 'Wrong Type' });
                return;
            }
            validatedFiles.push(file);
            setError(null);
        }
        let newFiles;
        if (!multiple && validatedFiles.length) {
            newFiles = [validatedFiles[0]];
        }
        else {
            newFiles = [
                ...filesToUpload,
                ...validatedFiles,
            ];
        }
        if (onChange) {
            onChange(newFiles);
        }
        setFilesToUpload(newFiles);
    }, [onChange, setFilesToUpload, setIsDragging]);
    const displayUploadLimit = react_1.useCallback(() => {
        if (validate && validate.maxSize) {
            return inUnit(validate.maxSize, uploadLimitIn);
        }
        return '';
    }, [validate]);
    return (react_1.default.createElement(box_1.Box, null,
        react_1.default.createElement(StyledDropZone, Object.assign({ onDragEnter: onDragEnter, onDragOver: onDragOver, onDragLeave: onDragLeave, onDrop: onDrop }, other, { p: "xl" }),
            react_1.default.createElement(UploadInput, { type: "file", onChange: (event) => onDrop(event), multiple: multiple }),
            react_1.default.createElement(box_1.Box, null,
                react_1.default.createElement(text_1.Text, { fontSize: "sm" }, "Pick or Drop File here to upload it."),
                react_1.default.createElement(box_1.Box, null,
                    validate && validate.maxSize ? (react_1.default.createElement(text_1.Text, { variant: "xs", color: "grey60", lineHeight: "default", mt: "sm" },
                        react_1.default.createElement(label_1.Label, { inline: true, uppercase: true }, "Max size:"),
                        displayUploadLimit())) : '',
                    validate && validate.mimeTypes && validate.mimeTypes.length ? (react_1.default.createElement(text_1.Text, { variant: "xs", color: "grey60", lineHeight: "default", mt: "sm" }, validate.mimeTypes.join(', '))) : ''))),
        error ? (react_1.default.createElement(message_box_1.MessageBox, { mt: "default", variant: "danger", size: "sm", icon: "Warning", message: error.title, onCloseClick: () => setError(null) }, error.message)) : '',
        filesToUpload.map((file, index) => (
        // eslint-disable-next-line react/no-array-index-key
        react_1.default.createElement(drop_zone_item_1.DropZoneItem, { file: file, key: index, onRemove: () => removeItem(index) })))));
};
exports.DropZone = DropZone;
exports.default = DropZone;
