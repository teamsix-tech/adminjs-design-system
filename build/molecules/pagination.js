"use strict";
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
exports.Pagination = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const jw_paginate_1 = __importDefault(require("jw-paginate"));
const box_1 = require("../atoms/box/box");
const button_1 = require("../atoms/button");
const icon_1 = require("../atoms/icon");
const css_class_1 = require("../utils/css-class");
const PaginationLink = styled_components_1.default(button_1.Button).attrs((props) => ({
    size: 'icon',
    variant: props.variant ? props.variant : 'text',
})) `
  min-width: 28px;
  height: 28px;
  line-height: 12px;
  padding: 3px 6px;
  text-align: center;
`;
PaginationLink.defaultProps = {
    className: css_class_1.cssClass('PaginationLink'),
};
const PaginationWrapper = styled_components_1.default(box_1.Box) `
  display: inline-block;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.grey20};
  & > :first-child {
    width: 56px;
    border-right: 1px solid ${({ theme }) => theme.colors.grey20};
  }
  & > :nth-child(2) {
    padding-left: 16px;
  }
  & > :last-child {
    width: 56px;
    border-left: 1px solid ${({ theme }) => theme.colors.grey20};
  }
  & > :nth-last-child(2) {
    padding-right: 16px;
  }
`;
/**
 * @classdesc
 *
 * <img src="components/pagination.png" />
 *
 * Pagination component
 *
 * ### Usage
 *
 * ```javascript
 * import { Pagination, PaginationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see PaginationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-pagination--default Storybook}
 * @example
 * const location = { search: ''}
 * return (
 *   <Text py="xl" textAlign="center">
 *     <Pagination
 *      total={100}
 *      page={4}
 *      perPage={10}
 *      location={location}
 *      onChange={(item) => alert(`clicked ${item}`)}
 *   />
 *   </Text>
 * )
 * @section design-system
 */
const Pagination = (props) => {
    const { total, page, perPage, onChange } = props, rest = __rest(props, ["total", "page", "perPage", "onChange"]);
    const currentPage = page || 1;
    const paginate = jw_paginate_1.default(total, currentPage, perPage);
    const isFirstPage = currentPage === paginate.startPage;
    const isLastPage = currentPage === paginate.endPage;
    const prevPage = isFirstPage ? currentPage : currentPage - 1;
    const nextPage = isLastPage ? currentPage : currentPage + 1;
    if (paginate.totalPages === 1 || total === 0) {
        return null;
    }
    return (react_1.default.createElement(PaginationWrapper, Object.assign({ className: css_class_1.cssClass('Pagination') }, rest),
        react_1.default.createElement(PaginationLink, { "data-testid": "previous", disabled: isFirstPage, onClick: () => (!isFirstPage ? onChange(prevPage) : undefined) },
            react_1.default.createElement(icon_1.Icon, { icon: "ChevronLeft" })),
        paginate.pages.map((p) => (react_1.default.createElement(PaginationLink, { key: p, onClick: () => onChange(p), variant: p === currentPage ? 'primary' : 'text', className: css_class_1.cssClass('PaginationLink', p === currentPage ? 'current' : ''), "data-testid": `page-${p}` }, p))),
        react_1.default.createElement(PaginationLink, { "data-testid": "next", onClick: () => (!isLastPage ? onChange(nextPage) : undefined), disabled: isLastPage },
            react_1.default.createElement(icon_1.Icon, { icon: "ChevronRight" }))));
};
exports.Pagination = Pagination;
exports.default = Pagination;
