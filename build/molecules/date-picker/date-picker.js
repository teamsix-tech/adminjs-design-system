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
exports.DatePicker = void 0;
const react_1 = __importStar(require("react"));
const react_datepicker_1 = __importDefault(require("react-datepicker"));
const styled_components_1 = __importDefault(require("styled-components"));
const datepicker_styles_1 = __importDefault(require("../../utils/datepicker.styles"));
const input_1 = require("../../atoms/input");
const button_1 = require("../../atoms/button");
const icon_1 = require("../../atoms/icon");
const form_group_1 = require("../form-group");
const css_class_1 = require("../../utils/css-class");
const useDatePicker_1 = __importDefault(require("./useDatePicker"));
const DatePickerWrapper = styled_components_1.default.div `
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.space.xxl};
`;
const StyledDatePicker = styled_components_1.default(form_group_1.InputGroup) `
  ${datepicker_styles_1.default};
  position: relative;

  &.active ${input_1.Input}, &.active ${button_1.Button} {
    z-index: 101;
  }
  
  & .react-datepicker {
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.colors.primary100};
    padding: ${({ theme }) => theme.space.default};
    font-family: ${({ theme }) => theme.font};
    z-index: 101;
  }

  & .react-datepicker__navigation--next {
    border-left-color: ${({ theme }) => theme.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--next:hover {
    border-left-color: ${({ theme }) => theme.colors.primary100};
  }

  & .react-datepicker__navigation--previous {
    border-right-color: ${({ theme }) => theme.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--previous:hover {
    border-right-color: ${({ theme }) => theme.colors.primary100};
  }

  & .react-datepicker__navigation {
    outline: none;
  }

  & .react-datepicker__year-read-view--down-arrow {
    top: 5px;
  }

  & .react-datepicker__header {
    background: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.default};
    border: none;
  }

  & .react-datepicker__current-month {
    font-weight: normal;
    padding-bottom: ${({ theme }) => theme.space.lg};
  }

  & .react-datepicker__month {
    margin-top: 0;
  }

  & .react-datepicker__day-name {
    color: ${({ theme }) => theme.colors.primary60};
  }

  & .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.colors.grey40};
  }

  & .react-datepicker__day--today.react-datepicker__day--keyboard-selected {
    color: ${({ theme }) => theme.colors.white};
  }

  & .react-datepicker__day--selected {
    color: ${({ theme }) => theme.colors.white};
  }

  & .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--today) {
    background: none;
    color: ${({ theme }) => theme.colors.grey100};
  }

  & .react-datepicker__day:hover,
  & .react-datepicker__day {
    border-radius: 15px;
  }

  & .react-datepicker__day--selected {
    background: ${({ theme }) => theme.colors.primary100};
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Overlay = styled_components_1.default.div `
  opacity: 0;
  background: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;

  &.hidden {
    display: none;
  }
`;
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
const DatePicker = (props) => {
    const { value, onChange, disabled, propertyType } = props, other = __rest(props, ["value", "onChange", "disabled", "propertyType"]);
    const [inputValue, setInputValue] = react_1.default.useState('');
    const { date, dateString, setCalendarVisible, isCalendarVisible, onDateChange, } = useDatePicker_1.default({ value, disabled, propertyType, onChange });
    react_1.useEffect(() => {
        // Only update input value if date is selected via the date picker
        if (dateString && new Date(dateString).valueOf() !== new Date(inputValue).valueOf()) {
            setInputValue(dateString);
        }
    }, [dateString]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Overlay, { onClick: () => setCalendarVisible(false), className: isCalendarVisible ? 'visible' : 'hidden' }),
        react_1.default.createElement(StyledDatePicker, { className: css_class_1.cssClass('DatePicker', isCalendarVisible ? 'active' : 'normal') },
            react_1.default.createElement(input_1.Input, { value: inputValue, onChange: (event) => {
                    const newValue = new Date(event.target.value);
                    setInputValue(event.target.value);
                    // Check if input value is a valid date
                    // eslint-disable-next-line no-restricted-globals
                    if (!isNaN(newValue.valueOf())) {
                        onChange(new Date(event.target.value));
                    }
                    else {
                        onChange(null);
                    }
                }, onFocus: () => setCalendarVisible(true), disabled: disabled }),
            react_1.default.createElement(button_1.Button, { variant: "primary", type: "button", size: "icon", disabled: disabled, onClick: () => setCalendarVisible(!isCalendarVisible) },
                react_1.default.createElement(icon_1.Icon, { icon: "Calendar" })),
            isCalendarVisible && (react_1.default.createElement(DatePickerWrapper, null,
                react_1.default.createElement(react_datepicker_1.default, Object.assign({ selected: date, onChange: onDateChange, inline: true, showTimeInput: propertyType === 'datetime' }, other)))))));
};
exports.DatePicker = DatePicker;
exports.default = DatePicker;
