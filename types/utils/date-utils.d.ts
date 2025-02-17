declare type PropertyType = 'date' | 'datetime' | string;
/**
 * adds leading 0 to the number when it is lower than 10
 * @param {number} pad        number - i.e 8
 * @returns {sting}           formatted number: i.e. "08"
 * @memberof module:@adminjs/design-system
 */
declare const pad: (n: number) => string;
/**
 * Formats date to YYYY-MM-DD
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */
declare const formatDate: (date: Date) => string;
/**
 * Formats date to YYYY-MM-DD HH:mm
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */
declare const formatDateTime: (date: Date) => string;
/**
 * Based on the property type formats date to either YYYY-MM-DD HH:mm or YYYY-MM-DD
 *
 * @param   {Date}    date
 * @param   {PropertyType}    propertyType
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */
declare const formatDateProperty: (date: Date, propertyType?: string | undefined) => string;
export { formatDateProperty, formatDate, formatDateTime, pad, PropertyType, };
