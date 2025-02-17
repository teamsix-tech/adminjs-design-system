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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichText = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const snow_styles_1 = __importDefault(require("./snow.styles"));
const bubble_styles_1 = __importDefault(require("./bubble.styles"));
const styles_1 = __importDefault(require("./styles"));
const box_1 = __importDefault(require("../../atoms/box/box"));
const rich_text_props_1 = require("./rich-text-props");
// Following hack is done for SSR case, where Quill wants to invoke `document.createElement...`
// So when system sees that file is run by the server (window is not defined) then it sets
// quill to null instead throwing errors. We have to use require because import has to be
// top-level. This line cannot be changed since rollup bundler relies on it in the exact form.
// Check out `config/rollup.js`
// @ts-ignore
const Quill = typeof window === 'object' ? require('quill') : null;
const Theme = styled_components_1.default(box_1.default) `
  ${bubble_styles_1.default};
  ${snow_styles_1.default};
  ${styles_1.default};
`;
/**
 * @load ./rich-text.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see RichTextProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-rich-text--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
exports.RichText = react_1.forwardRef((props, ref) => {
    var _a;
    const { value: initialValue, borderless, quill: options, onChange } = props;
    options.theme = options.theme || 'snow';
    if (!((_a = options.modules) === null || _a === void 0 ? void 0 : _a.toolbar)) {
        options.modules = options.modules || {};
        options.modules.toolbar = rich_text_props_1.DefaultQuillToolbarOptions;
    }
    if (!Quill) {
        return react_1.default.createElement("div", null, "Server Side Rendered");
    }
    const classNames = [];
    if (borderless) {
        classNames.push('quill-borderless');
    }
    const [quill, setQuill] = react_1.useState(null);
    const [content, setContent] = react_1.useState(initialValue || '');
    // TODO: right now I don't watch for changes on ref - maybe I should?
    const editorRef = ref || react_1.useRef(null);
    const handleChange = react_1.useCallback(() => {
        const editor = quill === null || quill === void 0 ? void 0 : quill.root;
        if (editor) {
            const currentContent = editor.innerHTML;
            setContent(currentContent);
            if (onChange) {
                onChange(currentContent);
            }
        }
    }, [onChange, quill]);
    react_1.useEffect(() => {
        if (editorRef.current) {
            const quillInstance = new Quill(editorRef.current, options);
            setQuill(quillInstance);
        }
        return () => {
            setQuill(null);
        };
    }, []);
    react_1.useEffect(() => {
        if (!editorRef.current || !quill) {
            return;
        }
        if (content && quill.root.innerHTML !== content) {
            quill.clipboard.dangerouslyPasteHTML(content);
        }
    }, [quill]); // only when quill is initialized - later on it should update content
    react_1.useEffect(() => {
        const editor = quill === null || quill === void 0 ? void 0 : quill.root;
        if (!editor) {
            return undefined;
        }
        editor === null || editor === void 0 ? void 0 : editor.addEventListener('DOMSubtreeModified', handleChange);
        return () => {
            editor === null || editor === void 0 ? void 0 : editor.removeEventListener('DOMSubtreeModified', handleChange);
        };
    }, [onChange, handleChange]);
    return (react_1.default.createElement(Theme, { quill: options },
        react_1.default.createElement("div", { className: classNames.join(' ') },
            react_1.default.createElement("div", { className: "quill-editor", ref: editorRef }))));
});
exports.default = exports.RichText;
