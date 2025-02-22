import React from 'react';
import type { ReactDatePickerProps } from 'react-datepicker';
import { PropertyType } from '../../utils';
declare type CustomProps = Partial<Omit<ReactDatePickerProps, 'value' | 'disabled' | 'onChange'>>;
/**
 * Props for DatePicker
 *
 * @memberof DatePicker
 * @alias DatePickerProps
 * @property {any} {...}    Any custom props to pass down to the ReactDatePicker
 * @see https://reactdatepicker.com/
 */
export declare type DatePickerProps = CustomProps & {
    /**
     * If datepicker should be disabled
     */
    disabled?: boolean;
    /**
     * selected date
     */
    value?: string | Date;
    /**
     * on change callback taking Date object as a date
     */
    onChange: (date: any) => void;
    /**
     * property type, could be either 'date' or 'datetime'
     */
    propertyType?: PropertyType;
};
/**
 * @classdesc
 *
 * <img src="components/date-picker.png" />
 *
 *
 * Component responsible for showing dates. It is a wrapper to
 * [react datepicker]{@link https://reactdatepicker.com/}.
 *
 * ### Usage
 *
 * ```javascript
 * import { DatePicker, DatePickerProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @see https://reactdatepicker.com/
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-datepicker--default Storybook}
 * @see DatePickerProps
 * @hideconstructor
 *
 * @example
 * return (
 * <Box width={1/2} height="300px">
 *   <DatePicker onChange={(date) => console.log(date)}/>
 * </Box>
 * )
 * @section design-system
 */
declare const DatePicker: React.FC<DatePickerProps>;
export { DatePicker };
export default DatePicker;
