declare const UNITS: readonly ["B", "KB", "MB", "GB", "TB"];
export declare type DisplaySizeUnit = typeof UNITS[number];
/**
 * Changes size in bytes to string. If unit is not provided - tries to find the best match.
 *
 * @param {number} size
 * @param {'B' | 'KB' | 'MB' | 'GB' | 'TB'} [unit]
 * @returns {string}
 * @memberof module:@adminjs/design-system
 */
declare const humanFileSize: (size: number | string, unit?: "B" | "KB" | "MB" | "GB" | "TB" | undefined) => string;
export { humanFileSize };
