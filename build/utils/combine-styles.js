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
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineStyles = void 0;
const theme = __importStar(require("../theme"));
const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));
const mergeDeep = (target, ...sources) => {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
};
/**
 * Applies new styles to the default theme
 *
 * ### Example
 *
 * ```jsx
 * import { combineStyles } from '@adminjs/design-system`
 *
 * const myTheme = combineStyles({
 *   colors: {
 *     primary100: '#000'
 *   }
 * })
 * ```
 *
 * @param   {Partial<Theme>}         newTheme
 * @memberof module:@adminjs/design-system
 *
 * @return  {Theme}
 */
const combineStyles = (newTheme) => {
    const merged = mergeDeep(theme, newTheme);
    if (newTheme.font) {
        return Object.assign(Object.assign({}, merged), { font: newTheme.font });
    }
    return merged;
};
exports.combineStyles = combineStyles;
